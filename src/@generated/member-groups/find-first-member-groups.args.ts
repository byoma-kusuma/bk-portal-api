import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsWhereInput } from './member-groups-where.input';
import { Type } from 'class-transformer';
import { MemberGroupsOrderByWithRelationInput } from './member-groups-order-by-with-relation.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberGroupsScalarFieldEnum } from './member-groups-scalar-field.enum';

@ArgsType()
export class FindFirstMemberGroupsArgs {

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    @Type(() => MemberGroupsWhereInput)
    where?: MemberGroupsWhereInput;

    @Field(() => [MemberGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberGroupsOrderByWithRelationInput>;

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:true})
    cursor?: MemberGroupsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemberGroupsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MemberGroupsScalarFieldEnum>;
}
