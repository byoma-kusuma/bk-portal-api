import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MemberGroupsScalarWhereWithAggregatesInput {

    @Field(() => [MemberGroupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MemberGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberGroupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MemberGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberGroupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MemberGroupsScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdBy?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    memberId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    groupId?: IntWithAggregatesFilter;
}
