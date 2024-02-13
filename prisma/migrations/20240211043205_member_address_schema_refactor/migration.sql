/*
  Warnings:

  - You are about to drop the column `addressid` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `currentAddressId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `permanentAddressId` on the `Member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberIdCurrentAddress]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberIdPermanentAddress]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_addressid_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_currentAddressId_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_permanentAddressId_fkey";

-- DropIndex
DROP INDEX "Member_currentAddressId_key";

-- DropIndex
DROP INDEX "Member_permanentAddressId_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "memberIdCurrentAddress" INTEGER,
ADD COLUMN     "memberIdPermanentAddress" INTEGER;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "addressid",
DROP COLUMN "currentAddressId",
DROP COLUMN "permanentAddressId";

-- CreateIndex
CREATE UNIQUE INDEX "Address_memberIdCurrentAddress_key" ON "Address"("memberIdCurrentAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Address_memberIdPermanentAddress_key" ON "Address"("memberIdPermanentAddress");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_memberIdCurrentAddress_fkey" FOREIGN KEY ("memberIdCurrentAddress") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_memberIdPermanentAddress_fkey" FOREIGN KEY ("memberIdPermanentAddress") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
