import { editStudent, readStudent, deleteStudent } from "@/lib/data/student";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const selectedStudent = params;
    const result = await readStudent(selectedStudent);

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
    const selectedStudent = params;
    const currentInfo = await readStudent(selectedStudent);

    const { email, name } = await req.json();

    const info = {
      id: selectedStudent.id,
      email: email ? email : currentInfo.email,
      name: name ? name : currentInfo.name,
    };

    const result = await editStudent(info);

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
    const selectedStudent = params;
    const result = await deleteStudent(selectedStudent);

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
