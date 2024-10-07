// app/api/intro/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../lib/mongodb";
import Intro from "../models/Intro";

export async function GET() {
  await dbConnect();
  try {
    const intro = await Intro.findOne({});
    if (!intro) {
      return NextResponse.json({ success: false, message: "Intro not found" });
    }
    return NextResponse.json({ success: true, data: intro });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}

export async function PUT(req: Request) {
  await dbConnect();
  const { title, desc } = await req.json();
  try {
    const updatedIntro = await Intro.findOneAndUpdate(
      {},
      { title, desc },
      { new: true, upsert: true }
    );
    return NextResponse.json({ success: true, data: updatedIntro });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
    return NextResponse.json({ success: false, error: "Unknown error" });
  }
}
