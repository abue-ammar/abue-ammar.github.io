// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { verifyPassword } from "../../lib/hash";
import { signToken } from "../../lib/jwt";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check if password is correct
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = signToken({ email: user.email });

    return NextResponse.json({ success: true, token });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
