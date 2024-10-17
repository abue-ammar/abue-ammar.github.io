// app/api/resume/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";
import dbConnect from "../lib/mongodb";
import Resume from "../models/Resume";

// Get resume info
export async function GET() {
  await dbConnect();
  try {
    const resume = await Resume.findOne({});
    if (!resume) {
      return NextResponse.json({ success: false, message: "Resume not found" });
    }
    return NextResponse.json({ success: true, data: resume });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Update resume info
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
  const { description, link, download } = await req.json();
  try {
    const updatedResume = await Resume.findOneAndUpdate(
      {},
      { description, link, download },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: updatedResume });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
