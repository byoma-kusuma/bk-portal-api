-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "centreId" INTEGER;

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
ALTER TABLE "Member" ADD CONSTRAINT "Member_centreId_fkey" FOREIGN KEY ("centreId") REFERENCES "Centre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
