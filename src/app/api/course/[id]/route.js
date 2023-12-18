import { editCourse, readCourse, deleteCourse } from "@/lib/data/course";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const selectedCourse = params;
    const result = await readCourse(selectedCourse);

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

export async function PATCH(req, { params }) {
  try {
    const selectedCourse = params;
    const currentInfo = await readCourse(selectedCourse);

    const { title, description, color } = await req.json();

    const info = {
      id: selectedCourse.id,
      title: title ? title : currentInfo.title,
      description: description ? description : currentInfo.description,
      color: color ? color : currentInfo.color,
    };

    const result = await editCourse(info);

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

export async function DELETE(req, { params }) {
  try {
    const selectedCourse = params;
    const result = await deleteCourse(selectedCourse);

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
