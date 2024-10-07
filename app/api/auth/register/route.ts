// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";
import { hashPassword } from "../../lib/hash";

// POST request handler to register a new user
export async function POST(req: Request) {
  await dbConnect();  // Ensure the database is connected

  const { email, password } = await req.json();  // Extract email and password from request body

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
  }

  // Hash the password using bcryptjs
  const hashedPassword = await hashPassword(password);

  // Create a new user
  try {
    const newUser = await User.create({ email, password: hashedPassword });
    return NextResponse.json({ success: true, message: "User created successfully", data: newUser });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: "Unknown error" }, { status: 500 });
  }
}
