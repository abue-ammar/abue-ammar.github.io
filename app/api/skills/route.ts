// app/api/skills/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Skill from "../models/Skill";

// Get all skills
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

// Create a new skill
export async function POST(req: Request) {
  await dbConnect();
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
