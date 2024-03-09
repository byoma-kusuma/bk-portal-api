-- CreateEnum
CREATE TYPE "CalendarType" AS ENUM ('BS', 'AD');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "dateOfApplication" TIMESTAMP(3),
ADD COLUMN     "dateOfApplicationCalendarType" "CalendarType",
ADD COLUMN     "dharmaInstructor" TEXT,
ADD COLUMN     "education" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "yearOfRefuge" INTEGER,
ADD COLUMN     "yearOfRefugeCalendarType" "CalendarType";
