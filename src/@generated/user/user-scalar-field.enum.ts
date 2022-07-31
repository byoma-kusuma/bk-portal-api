import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    userName = "userName",
    password = "password",
    avatar = "avatar",
    email = "email",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy",
    status = "status",
    roleId = "roleId",
    memberId = "memberId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
