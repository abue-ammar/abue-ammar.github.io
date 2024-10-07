// app/api/test-connection/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "MongoDB connection failed.",
      error,
    });
  }
}
