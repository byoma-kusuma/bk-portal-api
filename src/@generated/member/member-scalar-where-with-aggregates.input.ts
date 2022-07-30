import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumGenderTypeWithAggregatesFilter } from '../prisma/enum-gender-type-with-aggregates-filter.input';

@InputType()
export class MemberScalarWhereWithAggregatesInput {

    @Field(() => [MemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MemberScalarWhereWithAggregatesInput>;

    @Field(() => [MemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MemberScalarWhereWithAggregatesInput>;

    @Field(() => [MemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MemberScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    middleName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isMember?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phonePrimary?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneSecondary?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    centerAffiliation?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    membershipType?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permanentAddress?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currentAddress?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dob?: DateTimeWithAggregatesFilter;

    @Field(() => EnumGenderTypeWithAggregatesFilter, {nullable:true})
    gender?: EnumGenderTypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    sanghaJoinDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refugeName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    viber?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messenger?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    insta?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    photo?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isDeleted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uniqueKey?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updatedBy?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdBy?: StringWithAggregatesFilter;
}
