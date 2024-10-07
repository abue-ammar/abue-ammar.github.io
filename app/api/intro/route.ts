// app/api/intro/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";
import dbConnect from "../lib/mongodb";
import Intro from "../models/Intro";

// Get Intro (public)
export async function GET() {
  await dbConnect();
  try {
    const intro = await Intro.findOne({});
    return NextResponse.json({ success: true, data: intro });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Update Intro (protected)
export async function PUT(req: Request) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { title, desc } = await req.json();
  try {
    const updatedIntro = await Intro.findOneAndUpdate(
      {},
      { title, desc },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: updatedIntro });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
