import { createCourse, readAllCourses } from "@/lib/data"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
      const newCourse = await req.json();
      // const newCourse = {
      //   title: title,
      //   description: description,
      //   color: color,
      //   type: type
      // }
      console.log(newCourse)
      const result = await createCourse(newCourse)
  
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
  