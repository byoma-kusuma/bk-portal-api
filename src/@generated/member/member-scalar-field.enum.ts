import { registerEnumType } from '@nestjs/graphql';

export enum MemberScalarFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    middleName = "middleName",
    title = "title",
    isMember = "isMember",
    active = "active",
    phonePrimary = "phonePrimary",
    phoneSecondary = "phoneSecondary",
    centerAffiliation = "centerAffiliation",
    membershipType = "membershipType",
    permanentAddress = "permanentAddress",
    currentAddress = "currentAddress",
    dob = "dob",
    gender = "gender",
    sanghaJoinDate = "sanghaJoinDate",
    refugeName = "refugeName",
    viber = "viber",
    messenger = "messenger",
    insta = "insta",
    photo = "photo",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy"
}


registerEnumType(MemberScalarFieldEnum, { name: 'MemberScalarFieldEnum', description: undefined })
