import prisma from "@/lib/prisma";

// User entity
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

// Course entity
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

// Module entity
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
  const page = parseInt(data);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
  };

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
  });

  return modules;
}

// readModulesByCourse

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

// Class entity
export async function createClass(data) {
  const platformClass = prisma.class.create({
    data: {
      class: {
        create: {
          title: data.title,
          description: data.description,
          video: data.video,
          content: data.content,
          order: data.order,
          teacherName: data.teacherName,
          teacherCompany: data.teacherCompany,
          teacherRole: data.teacherRole,
          teacherLinkedin: data.teacherLinkedIn,
          teacherPicture: data.teacherPicture,
        },
        module: {
          connect: {
            id: data.moduleId,
          },
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
      teacherLinkedIn: true,
      teacherPicture: true,
      module: true,
    },
  });

  return platformClass;
}

export async function readAllClasses(data) {
  const page = parseInt(data);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
  };

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
  });

  return platformClasses;
}

// readClassesByModule

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
      teacherLinkedin: data.teacherLinkedIn,
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

// Enrollment entity
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
  const page = parseInt(data);
  const skip = page === 1 ? 0 : (page - 1) * 10;

  const query = {
    skip: skip,
    take: 10,
  };

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
  });

  return enrollments;
}

// readEnrollmentsByUser
// readEnrollmentsByCourse

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
