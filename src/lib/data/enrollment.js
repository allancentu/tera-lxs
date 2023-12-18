import prisma from "@/lib/prisma";

export async function createEnrollment(data) {
  const enrollment = prisma.enrollment.create({
    data: {
      course: {
        connect: {
          id: data.courseId,
        },
      },
      user: {
        connect: {
          id: data.studentId,
        },
      },
    },
  });

  return enrollment;
}

export async function readEnrollment(data) {
  const enrollment = prisma.enrollment.findUniqueOrThrow({
    where: {
      id: data.id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      course: true,
      user: true,
    },
  });

  return enrollment;
}

export async function readAllEnrollments(data) {
  const course = data.course;
  const student = data.student;
  const page = parseInt(data.page);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip ? skip : 0,
    take: 10,
    course: course,
    student: student,
  };

  if (!!course && !!student) {
    const enrollments = prisma.enrollment.findMany({
      skip: query.skip,
      take: query.take,
      where: {
        courseId: query.course,
        userId: query.student,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        course: true,
        user: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          userId: "asc",
        },
      ],
    });

    return enrollments;
  } else if (!!course) {
    const enrollments = prisma.enrollment.findMany({
      skip: query.skip,
      take: query.take,
      where: {
        courseId: query.course,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        course: true,
        user: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          userId: "asc",
        },
      ],
    });

    return enrollments;
  } else if (!!student) {
    const enrollments = prisma.enrollment.findMany({
      skip: query.skip,
      take: query.take,
      where: {
        userId: query.student,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        course: true,
        user: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          userId: "asc",
        },
      ],
    });

    return enrollments;
  } else {
    const enrollments = prisma.enrollment.findMany({
      skip: query.skip,
      take: query.take,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        course: true,
        user: true,
      },
      orderBy: [
        {
          courseId: "asc",
        },
        {
          userId: "asc",
        },
      ],
    });

    return enrollments;
  }
}

export async function editEnrollment(data) {
  const enrollment = prisma.enrollment.update({
    where: {
      id: data.id,
    },
    data: {
      userId: data.userId,
      courseId: data.courseId,
    },
  });

  return enrollment;
}

export async function deleteEnrollment(data) {
  const enrollment = prisma.enrollment.delete({
    where: {
      id: data.id,
    },
  });

  return enrollment;
}
