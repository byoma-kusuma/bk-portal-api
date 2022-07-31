import { registerEnumType } from '@nestjs/graphql';

export enum MembershipType {
    LifeMember = "LifeMember",
    HonoraryMember = "HonoraryMember",
    BoardMember = "BoardMember",
    GeneralMember = "GeneralMember"
}


registerEnumType(MembershipType, { name: 'MembershipType', description: undefined })
