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
    phoneMobile = "phoneMobile",
    phoneLand = "phoneLand",
    phoneOther = "phoneOther",
    membershipType = "membershipType",
    yearOfBirth = "yearOfBirth",
    gender = "gender",
    sanghaJoinDate = "sanghaJoinDate",
    refugeName = "refugeName",
    viber = "viber",
    messenger = "messenger",
    insta = "insta",
    photo = "photo",
    note = "note",
    centreId = "centreId",
    currentAddressId = "currentAddressId",
    permanentAddressId = "permanentAddressId",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy"
}


registerEnumType(MemberScalarFieldEnum, { name: 'MemberScalarFieldEnum', description: undefined })
