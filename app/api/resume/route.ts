// app/api/resume/route.ts
import { NextResponse } from "next/server";
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
  const { title, link, download } = await req.json();
  try {
    const updatedResume = await Resume.findOneAndUpdate(
      {},
      { title, link, download },
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
