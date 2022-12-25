-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('VALIDATED', 'VALIDATION_PENDING');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SYSTEM', 'DEFAULT');

-- CreateEnum
CREATE TYPE "GenderType" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('LifeMember', 'HonoraryMember', 'BoardMember', 'GeneralMember');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT E'VALIDATION_PENDING',
    "roleId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roleType" "Type" NOT NULL DEFAULT E'DEFAULT',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "title" TEXT,
    "isMember" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "phoneMobile" TEXT,
    "phoneLand" TEXT,
    "phoneOther" TEXT,
    "membershipType" "MembershipType",
    "yearOfBirth" INTEGER,
    "gender" "GenderType",
    "sanghaJoinDate" TIMESTAMP(3),
    "refugeName" TEXT,
    "viber" TEXT,
    "messenger" TEXT,
    "insta" TEXT,
    "photo" TEXT,
    "note" TEXT,
    "centreId" INTEGER,
    "addressid" INTEGER,
    "currentAddressId" INTEGER,
    "permanentAddressId" INTEGER,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "city" TEXT NOT NULL,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordHistory" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PasswordHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PasswordToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Centre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayText" TEXT NOT NULL,
    "displaySequence" INTEGER NOT NULL,
    "streetAddress" TEXT,
    "city" TEXT,
    "stateProvince" TEXT,
    "country" TEXT,

    CONSTRAINT "Centre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberGroup" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,
    "memberId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "MemberGroup_pkey" PRIMARY KEY ("memberId","groupId")
);

-- CreateTable
CREATE TABLE "Abhisekha" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Abhisekha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "isLocked" BOOLEAN NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,
    "parentEventId" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uniqueKey" TEXT,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbhisekhaResource" (
    "type" TEXT NOT NULL,
    "abhishekaId" INTEGER NOT NULL,
    "resourceId" INTEGER NOT NULL,

    CONSTRAINT "AbhisekhaResource_pkey" PRIMARY KEY ("abhishekaId","resourceId")
);

-- CreateTable
CREATE TABLE "MemberAbhisekha" (
    "type" TEXT NOT NULL,
    "abhishekaId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "MemberAbhisekha_pkey" PRIMARY KEY ("memberId","abhishekaId")
);

-- CreateTable
CREATE TABLE "EventMember" (
    "type" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "hasAttended" BOOLEAN NOT NULL,

    CONSTRAINT "EventMember_pkey" PRIMARY KEY ("memberId","eventId")
);

-- CreateTable
CREATE TABLE "EventResource" (
    "type" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "resourceId" INTEGER NOT NULL,

    CONSTRAINT "EventResource_pkey" PRIMARY KEY ("eventId","resourceId")
);

-- CreateTable
CREATE TABLE "EventAbhisekha" (
    "type" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "abhishekaId" INTEGER NOT NULL,

    CONSTRAINT "EventAbhisekha_pkey" PRIMARY KEY ("eventId","abhishekaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_uniqueKey_key" ON "User"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "User_memberId_key" ON "User"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_uniqueKey_key" ON "Role"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Member_currentAddressId_key" ON "Member"("currentAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_permanentAddressId_key" ON "Member"("permanentAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_uniqueKey_key" ON "Member"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Address_uniqueKey_key" ON "Address"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordHistory_uniqueKey_key" ON "PasswordHistory"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordHistory_userId_key" ON "PasswordHistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordToken_userId_key" ON "PasswordToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Centre_name_key" ON "Centre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Group_uniqueKey_key" ON "Group"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Abhisekha_uniqueKey_key" ON "Abhisekha"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Event_uniqueKey_key" ON "Event"("uniqueKey");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_uniqueKey_key" ON "Resource"("uniqueKey");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_centreId_fkey" FOREIGN KEY ("centreId") REFERENCES "Centre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_addressid_fkey" FOREIGN KEY ("addressid") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_currentAddressId_fkey" FOREIGN KEY ("currentAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_permanentAddressId_fkey" FOREIGN KEY ("permanentAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordHistory" ADD CONSTRAINT "PasswordHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordToken" ADD CONSTRAINT "PasswordToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberGroup" ADD CONSTRAINT "MemberGroup_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberGroup" ADD CONSTRAINT "MemberGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_parentEventId_fkey" FOREIGN KEY ("parentEventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbhisekhaResource" ADD CONSTRAINT "AbhisekhaResource_abhishekaId_fkey" FOREIGN KEY ("abhishekaId") REFERENCES "Abhisekha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbhisekhaResource" ADD CONSTRAINT "AbhisekhaResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberAbhisekha" ADD CONSTRAINT "MemberAbhisekha_abhishekaId_fkey" FOREIGN KEY ("abhishekaId") REFERENCES "Abhisekha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberAbhisekha" ADD CONSTRAINT "MemberAbhisekha_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventMember" ADD CONSTRAINT "EventMember_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventMember" ADD CONSTRAINT "EventMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventResource" ADD CONSTRAINT "EventResource_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventResource" ADD CONSTRAINT "EventResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAbhisekha" ADD CONSTRAINT "EventAbhisekha_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAbhisekha" ADD CONSTRAINT "EventAbhisekha_abhishekaId_fkey" FOREIGN KEY ("abhishekaId") REFERENCES "Abhisekha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
