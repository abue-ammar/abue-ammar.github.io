// app/api/experience/route.ts
import { NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";
import dbConnect from "../lib/mongodb";
import Experience from "../models/Experience";

// Specify the Node.js runtime
export const runtime = "nodejs";

// Get all experience entries (public)
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

// Create a new experience entry (protected)
export async function POST(req: Request) {
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
