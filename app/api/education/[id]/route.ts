// app/api/education/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import Education from "../../models/Education";

// Update an education entry by ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;
  const { institution, degree, duration, location } = await req.json();

  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      id,
      { institution, degree, duration, location },
      { new: true }
    );

    if (!updatedEducation) {
      return NextResponse.json({
        success: false,
        message: "Education entry not found",
      });
    }

    return NextResponse.json({ success: true, data: updatedEducation });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Delete an education entry by ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;

  try {
    const deletedEducation = await Education.findByIdAndDelete(id);

    if (!deletedEducation) {
      return NextResponse.json({
        success: false,
        message: "Education entry not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Education entry deleted successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
