import prisma from "@/lib/prisma";

export async function createModule(data) {
  const module = prisma.module.create({
    data: {
      title: data.title,
      description: data.description,
      order: data.order,
      course: {
        connect: {
          id: data.courseId,
        },
      },
    },
  });

  return module;
}

export async function readModule(data) {
  const module = prisma.module.findUniqueOrThrow({
    where: {
      id: data.id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      title: true,
      description: true,
      order: true,
      course: true,
      classes: true,
    },
  });

  return module;
}

export async function readAllModules(data) {
  const course = data.course;
  const page = parseInt(data.page);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
    course: course,
  };

  if (!!course) {
    const modules = prisma.module.findMany({
      skip: query.skip,
      take: query.take,
      where: {
        courseId: query.course,
      },
      select: {
        id: true,
        courseId: true,
        createdAt: true,
        updatedAt: true,
        title: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          order: "asc",
        },
      ],
    });
    return modules;
  } else {
    const modules = prisma.module.findMany({
      skip: query.skip,
      take: query.take,
      select: {
        id: true,
        courseId: true,
        createdAt: true,
        updatedAt: true,
        title: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          order: "asc",
        },
      ],
    });
    return modules;
  }
}

export async function editModule(data) {
  const module = prisma.module.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      order: data.order,
    },
  });

  return module;
}

export async function deleteModule(data) {
  const module = prisma.module.delete({
    where: {
      id: data.id,
    },
  });

  return module;
}
