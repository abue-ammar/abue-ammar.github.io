// app/api/projects/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import { verifyToken } from "../../lib/jwt";
import Project from "../../models/Projects";

// Update a project by ID (protected)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  const { title, description, link, github, image, techs } = await req.json();
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { title, description, link, github, image, techs }, { new: true });
    if (!updatedProject) {
      return NextResponse.json({ success: false, message: "Project not found" });
    }
    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Delete a project by ID (protected)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return NextResponse.json({ success: false, message: "Project not found" });
    }
    return NextResponse.json({ success: true, message: "Project deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
