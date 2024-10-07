// app/api/education/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import { verifyToken } from "../../lib/jwt";
import Education from "../../models/Education";

// Update an education entry by ID (protected)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  // JWT protection
  const token = req.headers.get("Authorization")?.split(" ")[1];
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  const { institution, degree, duration, location } = await req.json();

  try {
    const updatedEducation = await Education.findByIdAndUpdate(id, { institution, degree, duration, location }, { new: true });
    if (!updatedEducation) {
      return NextResponse.json({ success: false, message: "Education entry not found" });
    }
    return NextResponse.json({ success: true, data: updatedEducation });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Delete an education entry by ID (protected)
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
    const deletedEducation = await Education.findByIdAndDelete(id);

    if (!deletedEducation) {
      return NextResponse.json({ success: false, message: "Education entry not found" });
    }

    return NextResponse.json({ success: true, message: "Education entry deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
