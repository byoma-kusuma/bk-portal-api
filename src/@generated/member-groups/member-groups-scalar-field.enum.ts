import { registerEnumType } from '@nestjs/graphql';

export enum MemberGroupsScalarFieldEnum {
    createdAt = "createdAt",
    createdBy = "createdBy",
    memberId = "memberId",
    groupId = "groupId"
}


registerEnumType(MemberGroupsScalarFieldEnum, { name: 'MemberGroupsScalarFieldEnum', description: undefined })
