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
    tempAddress = "tempAddress",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy",
    centreId = "centreId",
    addressid = "addressid",
    currentAddressId = "currentAddressId",
    permanentAddressId = "permanentAddressId"
}


registerEnumType(MemberScalarFieldEnum, { name: 'MemberScalarFieldEnum', description: undefined })
