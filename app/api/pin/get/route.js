import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    
    const pins = await db.pin.findMany();

    return NextResponse.json(pins, { status: 200 });
  } catch (error) {
    console.log("GET PINS ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
