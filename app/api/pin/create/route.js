import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, dresscriptoin, type, content, image } = await req.json();
    if (!title) {
      return new NextResponse("Title is mandatory", { status: 400 });
    }
    if (!content) {
      return new NextResponse("Content is mandatory", { status: 400 });
    }
    if (!type) {
      return new NextResponse("Type is mandatory", { status: 400 });
    }
    if (!image) {
      return new NextResponse("Image is mandatory", { status: 400 });
    }

    const pin = await db.pin.create({
      data: {
        title,
        dresscriptoin,
        type,
        content,
        image,
      },
    });
    return NextResponse.json(pin, { status: 201 });
  } catch (error) {
    console.log("POST PIN ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
