// app/api/projects/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Project from "../models/Projects";

// Get all projects
export async function GET() {
  await dbConnect();
  try {
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Create a new project
export async function POST(req: Request) {
  await dbConnect();
  const { title, description, link, github, image, techs } = await req.json();
  try {
    const newProject = await Project.create({ title, description, link, github, image, techs });
    return NextResponse.json({ success: true, data: newProject });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
