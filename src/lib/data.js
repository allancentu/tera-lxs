import prisma from "@/lib/prisma";

// User an profile entities
export async function createStudent(info) {
    const data = info

    try {
        const student = prisma.user.create({
            data: {
                user: {
                    create: {
                        email: data.email,
                        name: data.name
                    }
                }
            }
        })
        return(student)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function createProfile(info) {
    const data = info

    try {
        const profile = prisma.profile.create({
            data: {
                profile: {
                    create: {
                        description: data.description,
                        currentCompany: data.currentCompany,
                        currentRole: data.currentRole,
                        linkedinUrl: data.linkedinUrl,
                        profilePicture: data.profilePicture
                    }
                },
                user: {
                    connect: {
                        id: data.userId
                    }
                }
            }
        })

        return(profile)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readProfile(info) {
    const data = info

    try {
        const profile = prisma.profile.findUniqueOrThrow({
            where: {
                id: data.id,
              },
            select: {
                id: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
                description: true,
                currentCompany: true,
                currentRole: true,
                linkedinUrl: true,
                profilePicture: true,
                user: {
                    select: {
                        email: true,
                        name: true,
                        enrollments: true
                    }
                }
            }
        })

        return(profile)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readAllProfiles(info) {
    const data = info

    try {
        const profiles = prisma.profile.findMany({
            skip: data.skip,
            take: data.take,
            select: {
                id: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
                user: {
                    select: {
                        email: true
                    }
                }
            }
        })

        return(profiles)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function editProfile(info) {
    const data = info

    try {
        const profile = prisma.profile.update({
            where: {
                id: data.id,
              },
              data: {
                description: data.description,
                currentCompany: data.currentCompany,
                currentRole: data.currentRole,
                linkedinUrl: data.linkedinUrl,
                profilePicture: data.profilePicture
              },
        })

        return(profile)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

// Course entity
export async function createCourse(data) {
    try {
        const course = prisma.course.create({
            data: {
                course: {
                    create: {
                        title: data.title,
                        description: data.description,
                        color: data.color,
                        type: data.type
                    }
                }
            }
        })

        return(course)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readCourse(info) {
    const data = info

    try {
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
                type: true,
                modules: true,
                cohorts: true,
            }
        })

        return(course)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readAllCourses(info) {
    const data = info

    try {
        const courses = prisma.course.findMany({
            skip: data.skip,
            take: data.take,
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                title: true
            }
        })

        return(courses)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function editCourse(info) {
    const data = info

    try {
        const course = prisma.course.update({
            where: {
                id: data.id,
              },
              data: {
                title: data.title,
                description: data.description,
                color: data.color,
                type: data.type
              },
        })

        return(course)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function deleteCourse(info) {
    const data = info

    try {
        const course = prisma.course.delete({
            where: {
                id: data.id,
              }
        })

        return(course)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

// Module entity
export async function createModule(info) {
    const data = info

    try {
        const module = prisma.module.create({
            data: {
                module: {
                    create: {
                        title: data.title,
                        description: data.description,
                        order: data.order
                    }
                },
                course: {
                    connect: {
                        id: data.courseId
                    }
                }
            }
        })

        return(module)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readModule(info) {
    const data = info

    try {
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
                classes: true
            }
        })

        return(module)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readAllModules(info) {
    const data = info

    try {
        const modules = prisma.module.findMany({
            skip: data.skip,
            take: data.take,
            where: {
                courseId: data.courseId
            },
            select: {
                id: true,
                courseId: true,
                createdAt: true,
                updatedAt: true,
                title: true
            }
        })

        return(modules)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function editModule(info) {
    const data = info

    try {
        const module = prisma.module.update({
            where: {
                id: data.id,
              },
              data: {
                title: data.title,
                description: data.description,
                order: data.order
              },
        })

        return(module)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function deleteModule(info) {
    const data = info

    try {
        const module = prisma.module.delete({
            where: {
                id: data.id,
              }
        })

        return(module)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

// Class entity
export async function createClass(info) {
    const data = info

    try {
        const platformClass = prisma.class.create({
            data: {
                class: {
                    create: {
                        title: data.title,
                        description: data.description,
                        type: data.type,
                        video: data.video, 
                        content: data.content,
                        order: data.order,
                    }
                },
                module: {
                    connect: {
                        id: data.moduleId
                    }
                }
            }
        })

        return(platformClass)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readClass(info) {
    const data = info

    try {
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
                type: true,
                video: true,
                content: true,
                order: true,
                moduleId: true
            }
        })

        return(platformClass)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function readAllClasses(info) {
    const data = info

    try {
        const platformClasses = prisma.class.findMany({
            skip: data.skip,
            take: data.take,
            where: {
                moduleId: data.moduleId
            },
            select: {
                id: true,
                moduleId: true,
                createdAt: true,
                updatedAt: true,
                title: true
            }
        })

        return(platformClasses)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function editClass(info) {
    const data = info

    try {
        const platformClass = prisma.class.update({
            where: {
                id: data.id,
              },
              data: {
                title: data.title,
                description: data.description,
                type: data.type,
                video: data.video,
                content: data.content,
                order: data.order
              },
        })

        return(platformClass)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}

export async function deleteClass(info) {
    const data = info

    try {
        const platformClass = prisma.class.delete({
            where: {
                id: data.id,
              }
        })

        return(platformClass)
    } catch (error) {
        console.log(error.message);
        return(error);
    }
}