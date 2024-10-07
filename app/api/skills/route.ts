// app/api/skills/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Skill from "../models/Skill";
import { verifyToken } from "../lib/jwt";

// Get all skills (public)
export async function GET() {
  await dbConnect();
  try {
    const skills = await Skill.find({});
    return NextResponse.json({ success: true, data: skills });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Create a new skill (protected)
export async function POST(req: Request) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { name, url } = await req.json();
  try {
    const newSkill = await Skill.create({ name, url });
    return NextResponse.json({ success: true, data: newSkill });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
