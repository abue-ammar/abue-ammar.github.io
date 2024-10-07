// app/api/experience/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Experience from "../models/Experience";

// Get all experiences
export async function GET() {
  await dbConnect();
  try {
    const experiences = await Experience.find({});
    return NextResponse.json({ success: true, data: experiences });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Create a new experience
export async function POST(req: Request) {
  await dbConnect();
  const { name, position, duration, tasks } = await req.json();
  try {
    const newExperience = await Experience.create({
      name,
      position,
      duration,
      tasks,
    });
    return NextResponse.json({ success: true, data: newExperience });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
