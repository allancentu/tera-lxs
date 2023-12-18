import { createEnrollment, readAllEnrollments } from "@/lib/data/enrollment";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const newEnrollment = await req.json();
    const result = await createEnrollment(newEnrollment);

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

    const info = {
      page: searchParams.get("page"),
      course: searchParams.get("course"),
      student: searchParams.get("student"),
    };

    const result = await readAllEnrollments(info);

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
