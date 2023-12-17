/*
  Warnings:

  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teacherCompany` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherLinkedin` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherName` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherPicture` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherRole` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "teacherCompany" TEXT NOT NULL,
ADD COLUMN     "teacherLinkedin" TEXT NOT NULL,
ADD COLUMN     "teacherName" TEXT NOT NULL,
ADD COLUMN     "teacherPicture" TEXT NOT NULL,
ADD COLUMN     "teacherRole" TEXT NOT NULL;

-- DropTable
DROP TABLE "Teacher";
