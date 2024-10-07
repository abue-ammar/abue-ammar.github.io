// app/api/projects/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import { verifyToken } from "../lib/jwt";
import Project from "../models/Projects";

// Get all projects (public)
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

// Create a new project (protected)
export async function POST(req: Request) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

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
