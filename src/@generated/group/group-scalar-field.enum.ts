import { registerEnumType } from '@nestjs/graphql';

export enum GroupScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    visible = "visible",
    isDeleted = "isDeleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy"
}


registerEnumType(GroupScalarFieldEnum, { name: 'GroupScalarFieldEnum', description: undefined })
