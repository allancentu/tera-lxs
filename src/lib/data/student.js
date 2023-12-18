import prisma from "@/lib/prisma";

export async function createStudent(data) {
  const student = prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
    },
  });
  return student;
}

export async function readStudent(data) {
  const student = prisma.user.findUniqueOrThrow({
    where: {
      id: data.id,
    },
    select: {
      email: true,
      name: true,
    },
  });

  return student;
}

export async function readAllStudents(data) {
  const page = parseInt(data);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
  };

  const students = prisma.user.findMany({
    skip: query.skip,
    take: query.take,
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      email: true,
    },
    orderBy: [
      {
        createdAt: "asc",
      },
    ],
  });

  return students;
}

export async function editStudent(data) {
  const student = prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      email: data.email,
      name: data.name,
    },
  });

  return student;
}

export async function deleteStudent(data) {
  const student = prisma.user.delete({
    where: {
      id: data.id,
    },
  });

  return student;
}
