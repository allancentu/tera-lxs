import { editClass, readClass, deleteClass } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const selectedClass = params;
    const result = await readClass(selectedClass);

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
    const selectedClass = params;
    const currentInfo = await readClass(selectedClass);

    const {
      title,
      description,
      video,
      content,
      order,
      teacherName,
      teacherCompany,
      teacherRole,
      teacherLinkedIn,
      teacherPicture,
      moduleId,
    } = await req.json();

    const info = {
      id: selectedClass.id,
      title: title ? title : currentInfo.title,
      description: description ? description : currentInfo.description,
      video: video ? video : currentInfo.video,
      content: content ? content : currentInfo.content,
      order: order ? order : currentInfo.order,
      teacherName: teacherName ? teacherName : currentInfo.teacherName,
      teacherCompany: teacherCompany
        ? teacherCompany
        : currentInfo.teacherCompany,
      teacherRole: teacherRole ? teacherRole : currentInfo.teacherRole,
      teacherLinkedIn: teacherLinkedIn
        ? teacherLinkedIn
        : currentInfo.teacherLinkedIn,
      teacherPicture: teacherPicture
        ? teacherPicture
        : currentInfo.teacherPicture,
      moduleId: moduleId ? moduleId : currentInfo.moduleId,
    };

    const result = await editClass(info);

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
    const selectedClass = params;
    const result = await deleteClass(selectedClass);

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
