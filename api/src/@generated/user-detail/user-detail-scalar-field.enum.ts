import { registerEnumType } from '@nestjs/graphql';

export enum UserDetailScalarFieldEnum {
    id = "id",
    avatar = "avatar",
    title = "title",
    phoneNumber = "phoneNumber",
    company = "company",
    birthday = "birthday",
    streetAddress = "streetAddress",
    steetAddress2 = "steetAddress2",
    country = "country",
    zip = "zip",
    secondaryEmail = "secondaryEmail",
    notes = "notes",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy",
    userId = "userId"
}


registerEnumType(UserDetailScalarFieldEnum, { name: 'UserDetailScalarFieldEnum', description: undefined })
