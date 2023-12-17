import { editModule, readModule, deleteModule } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const selectedModule = params;
    const result = await readModule(selectedModule);

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
    const selectedModule = params;
    const currentInfo = await readModule(selectedModule);

    const { title, description, order, courseId } = await req.json();

    const info = {
      id: selectedModule.id,
      title: title ? title : currentInfo.title,
      description: description ? description : currentInfo.description,
      order: order ? order : currentInfo.order,
      courseId: courseId ? courseId : currentInfo.courseId,
    };

    const result = await editModule(info);

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
    const selectedModule = params;
    const result = await deleteModule(selectedModule);

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
