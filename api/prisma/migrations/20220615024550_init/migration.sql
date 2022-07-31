-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SYSTEM', 'DEFAULT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('VALIDATED', 'VALIDATION_PENDING');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT E'VALIDATION_PENDING',
    "roleId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roleType" "Type" NOT NULL DEFAULT E'DEFAULT',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDetail" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "title" TEXT,
    "phoneNumber" TEXT,
    "company" TEXT,
    "birthday" TEXT,
    "streetAddress" TEXT,
    "steetAddress2" TEXT,
    "country" TEXT NOT NULL,
    "zip" TEXT,
    "secondaryEmail" TEXT,
    "notes" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordHistory" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PasswordHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_uniqueKey_key" ON "User"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_uniqueKey_key" ON "Role"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_uniqueKey_key" ON "UserDetail"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_userId_key" ON "UserDetail"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordHistory_uniqueKey_key" ON "PasswordHistory"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordHistory_userId_key" ON "PasswordHistory"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDetail" ADD CONSTRAINT "UserDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordHistory" ADD CONSTRAINT "PasswordHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
