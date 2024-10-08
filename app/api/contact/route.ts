// app/api/contact/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Contact from "../models/Contact";
import { verifyToken } from "../lib/jwt";

// Get contact info
export async function GET() {
  await dbConnect();
  try {
    const contact = await Contact.findOne({});
    if (!contact) {
      return NextResponse.json({
        success: false,
        message: "Contact info not found",
      });
    }
    return NextResponse.json({ success: true, data: contact });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

// Update contact info
export async function PUT(req: Request) {
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
  const { github, mail, linkedin, phone } = await req.json();
  try {
    const updatedContact = await Contact.findOneAndUpdate(
      {},
      { github, mail, linkedin, phone },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: updatedContact });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
