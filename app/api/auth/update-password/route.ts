// app/api/auth/update-password/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import User from "../../models/User";
import { verifyToken } from "../../lib/jwt";
import { hashPassword, verifyPassword } from "../../lib/hash";
import { JwtPayload } from "jsonwebtoken";

export async function PUT(req: Request) {
  await dbConnect();
  const token = req.headers.get("Authorization")?.split(" ")[1];  // Bearer token

  // Verify JWT token
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await req.json();

  try {
    // Find the user by their email (from token payload)
    const user = await User.findOne({ email: (decoded as JwtPayload).email });
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Verify current password
    const isPasswordValid = await verifyPassword(currentPassword, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: "Invalid current password" }, { status: 400 });
    }

    // Hash the new password and update it
    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong", error }, { status: 500 });
  }
}
