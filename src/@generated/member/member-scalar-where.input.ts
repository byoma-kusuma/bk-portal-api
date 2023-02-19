import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumMembershipTypeFilter } from '../prisma/enum-membership-type-filter.input';
import { EnumGenderTypeFilter } from '../prisma/enum-gender-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MemberScalarWhereInput {

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    AND?: Array<MemberScalarWhereInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    OR?: Array<MemberScalarWhereInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    NOT?: Array<MemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    middleName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isMember?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneMobile?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneLand?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneOther?: StringFilter;

    @Field(() => EnumMembershipTypeFilter, {nullable:true})
    membershipType?: EnumMembershipTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    yearOfBirth?: IntFilter;

    @Field(() => EnumGenderTypeFilter, {nullable:true})
    gender?: EnumGenderTypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    sanghaJoinDate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    refugeName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    viber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    messenger?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    insta?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    photo?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    note?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tempAddress?: StringFilter;

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

    @Field(() => IntFilter, {nullable:true})
    centreId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    addressid?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currentAddressId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permanentAddressId?: IntFilter;
}
