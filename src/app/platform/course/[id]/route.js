import prisma from "@/lib/prisma"
import { readCourse, editCourse, deleteCourse } from "@/lib/data"
import { NextRequest, NextResponse } from "next/server";
  
export async function GET(req) {
    try {
      const data = await req.json();
      const result = readCourse(data)

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(error.message);
    }
}

export async function PATCH(req) {
    try {
      const data = await req.json();
      const result = editCourse(data)

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(error.message);
    }
}

export async function DELETE(req) {
    try {
      const data = await req.json();
      const result = deleteCourse(data)

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(error.message);
    }
}