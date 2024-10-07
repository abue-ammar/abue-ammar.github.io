// app/api/skills/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import { verifyToken } from "../../lib/jwt";
import Skill from "../../models/Skill";

// Update a skill by ID (protected)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  const { name, url } = await req.json();

  try {
    const updatedSkill = await Skill.findByIdAndUpdate(id, { name, url }, { new: true });
    if (!updatedSkill) {
      return NextResponse.json({ success: false, message: "Skill not found" });
    }
    return NextResponse.json({ success: true, data: updatedSkill });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Delete a skill by ID (protected)
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
    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return NextResponse.json({ success: false, message: "Skill not found" });
    }

    return NextResponse.json({ success: true, message: "Skill deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
