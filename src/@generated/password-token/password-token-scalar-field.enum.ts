import { registerEnumType } from '@nestjs/graphql';

export enum PasswordTokenScalarFieldEnum {
    id = "id",
    token = "token",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(PasswordTokenScalarFieldEnum, { name: 'PasswordTokenScalarFieldEnum', description: undefined })
