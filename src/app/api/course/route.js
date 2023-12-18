import { createCourse, readAllCourses } from "@/lib/data/course";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const newCourse = await req.json();
    const result = await createCourse(newCourse);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);

    const page = searchParams.get("page");

    const result = await readAllCourses(page);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
