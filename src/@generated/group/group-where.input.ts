import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MemberGroupListRelationFilter } from '../member-group/member-group-list-relation-filter.input';

@InputType()
export class GroupWhereInput {

    @Field(() => [GroupWhereInput], {nullable:true})
    AND?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    OR?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    NOT?: Array<GroupWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    visible?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    uniqueKey?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updatedBy?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => MemberGroupListRelationFilter, {nullable:true})
    memberGroups?: MemberGroupListRelationFilter;
}
