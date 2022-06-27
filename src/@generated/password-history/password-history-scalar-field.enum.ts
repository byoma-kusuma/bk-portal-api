import { registerEnumType } from '@nestjs/graphql';

export enum PasswordHistoryScalarFieldEnum {
    id = "id",
    password = "password",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy",
    userId = "userId"
}


registerEnumType(PasswordHistoryScalarFieldEnum, { name: 'PasswordHistoryScalarFieldEnum', description: undefined })
