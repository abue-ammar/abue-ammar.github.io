// app/api/education/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Education from "../models/Education";

// Get all education entries
export async function GET() {
  await dbConnect();
  try {
    const educations = await Education.find({});
    return NextResponse.json({ success: true, data: educations });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Create a new education entry
export async function POST(req: Request) {
  await dbConnect();
  const { institution, degree, duration, location } = await req.json();
  try {
    const newEducation = await Education.create({
      institution,
      degree,
      duration,
      location,
    });
    return NextResponse.json({ success: true, data: newEducation });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
