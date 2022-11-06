import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MemberRelationFilter } from '../member/member-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';

@InputType()
export class MemberGroupsWhereInput {

    @Field(() => [MemberGroupsWhereInput], {nullable:true})
    AND?: Array<MemberGroupsWhereInput>;

    @Field(() => [MemberGroupsWhereInput], {nullable:true})
    OR?: Array<MemberGroupsWhereInput>;

    @Field(() => [MemberGroupsWhereInput], {nullable:true})
    NOT?: Array<MemberGroupsWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => MemberRelationFilter, {nullable:true})
    member?: MemberRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    memberId?: IntFilter;

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;
}
