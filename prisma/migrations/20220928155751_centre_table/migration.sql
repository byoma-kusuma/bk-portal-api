/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `centreId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "centreId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email";

-- CreateTable
CREATE TABLE "Centre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayText" TEXT NOT NULL,
    "displaySequence" INTEGER NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Centre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Centre_name_key" ON "Centre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Centre_uniqueKey_key" ON "Centre"("uniqueKey");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_centreId_fkey" FOREIGN KEY ("centreId") REFERENCES "Centre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
