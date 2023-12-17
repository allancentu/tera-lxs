/*
  Warnings:

  - You are about to drop the column `type` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `cohortId` on the `Enrollment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Enrollment_userId_key";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "cohortId";
