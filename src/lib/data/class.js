import prisma from "@/lib/prisma";

export async function createClass(data) {
  const platformClass = prisma.class.create({
    data: {
      title: data.title,
      description: data.description,
      video: data.video,
      content: data.content,
      order: data.order,
      teacherName: data.teacherName,
      teacherCompany: data.teacherCompany,
      teacherRole: data.teacherRole,
      teacherLinkedin: data.teacherLinkedin,
      teacherPicture: data.teacherPicture,
      module: {
        connect: {
          id: data.moduleId,
        },
      },
    },
  });

  return platformClass;
}

export async function readClass(data) {
  const platformClass = prisma.class.findUniqueOrThrow({
    where: {
      id: data.id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      title: true,
      description: true,
      video: true,
      content: true,
      order: true,
      teacherName: true,
      teacherCompany: true,
      teacherRole: true,
      teacherLinkedin: true,
      teacherPicture: true,
      module: true,
    },
  });

  return platformClass;
}

export async function readAllClasses(data) {
  const module = data.module;
  const page = parseInt(data.page);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip ? skip : 0,
    take: 10,
    module: module,
  };

  if (!!module) {
    const platformClasses = prisma.class.findMany({
      skip: query.skip,
      take: query.take,
      where: {
        moduleId: query.module,
      },
      select: {
        id: true,
        moduleId: true,
        createdAt: true,
        updatedAt: true,
        title: true,
      },
      orderBy: [
        {
          moduleId: "asc",
        },
        {
          order: "asc",
        },
      ],
    });

    return platformClasses;
  } else {
    const platformClasses = prisma.class.findMany({
      skip: query.skip,
      take: query.take,
      select: {
        id: true,
        moduleId: true,
        createdAt: true,
        updatedAt: true,
        title: true,
      },
      orderBy: [
        {
          moduleId: "asc",
        },
        {
          order: "asc",
        },
      ],
    });

    return platformClasses;
  }
}

export async function editClass(data) {
  const platformClass = prisma.class.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      video: data.video,
      content: data.content,
      order: data.order,
      teacherName: data.teacherName,
      teacherCompany: data.teacherCompany,
      teacherRole: data.teacherRole,
      teacherLinkedin: data.teacherLinkedin,
      teacherPicture: data.teacherPicture,
    },
  });

  return platformClass;
}

export async function deleteClass(data) {
  const platformClass = prisma.class.delete({
    where: {
      id: data.id,
    },
  });

  return platformClass;
}
