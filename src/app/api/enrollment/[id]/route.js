import {
  editEnrollment,
  readEnrollment,
  deleteEnrollment,
} from "@/lib/data/enrollment";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const selectedEnrollment = params;
    const result = await readEnrollment(selectedEnrollment);

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
    const selectedEnrollment = params;
    const currentInfo = await readEnrollment(selectedEnrollment);

    const { courseId, userId } = await req.json();

    const info = {
      id: selectedEnrollment.id,
      courseId: courseId ? courseId : currentInfo.courseId,
      userId: userId ? userId : currentInfo.userId,
    };

    const result = await editEnrollment(info);

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
    const selectedEnrollment = params;
    const result = await deleteEnrollment(selectedEnrollment);

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
