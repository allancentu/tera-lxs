import prisma from "@/lib/prisma"
import { createCourse, readAllCourses } from "@/lib/data"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
      const newCourse = await req.json();
      const result = createCourse(newCourse)
  
      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }
  
  export async function GET() {
    try {
      const result = readAllCourses()

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }
  