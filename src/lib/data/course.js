import prisma from "@/lib/prisma";

export async function createCourse(data) {
  const course = prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      color: data.color,
    },
  });

  return course;
}

export async function readCourse(data) {
  const course = prisma.course.findUniqueOrThrow({
    where: {
      id: data.id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      title: true,
      description: true,
      color: true,
      modules: true,
    },
  });

  return course;
}

export async function readAllCourses(data) {
  const page = parseInt(data);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
  };

  const courses = prisma.course.findMany({
    skip: query.skip,
    take: query.take,
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      title: true,
    },
    orderBy: [
      {
        createdAt: "asc",
      },
    ],
  });

  return courses;
}

export async function editCourse(data) {
  const course = prisma.course.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      color: data.color,
    },
  });

  return course;
}

export async function deleteCourse(data) {
  const course = prisma.course.delete({
    where: {
      id: data.id,
    },
  });

  return course;
}
