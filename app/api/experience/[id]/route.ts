// app/api/experience/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import { verifyToken } from "../../lib/jwt";
import Experience from "../../models/Experience";

// Update an experience entry by ID (protected)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  const { name, position, duration, tasks } = await req.json();

  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      { name, position, duration, tasks },
      { new: true }
    );
    if (!updatedExperience) {
      return NextResponse.json({ success: false, message: "Experience entry not found" });
    }

    return NextResponse.json({ success: true, data: updatedExperience });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Delete an experience entry by ID (protected)
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
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return NextResponse.json({ success: false, message: "Experience entry not found" });
    }

    return NextResponse.json({ success: true, message: "Experience entry deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
