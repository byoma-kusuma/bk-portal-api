import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class UserDetailWhereInput {

    @Field(() => [UserDetailWhereInput], {nullable:true})
    AND?: Array<UserDetailWhereInput>;

    @Field(() => [UserDetailWhereInput], {nullable:true})
    OR?: Array<UserDetailWhereInput>;

    @Field(() => [UserDetailWhereInput], {nullable:true})
    NOT?: Array<UserDetailWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatar?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    company?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    birthday?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    streetAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    steetAddress2?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    secondaryEmail?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    notes?: StringFilter;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
