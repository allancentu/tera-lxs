import { createModule, readAllModules } from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const newModule = await req.json();
    const result = await createModule(newModule);

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
    };

    const result = await readAllModules(info);

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
