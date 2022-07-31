import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PasswordHistoryWhereInput {

    @Field(() => [PasswordHistoryWhereInput], {nullable:true})
    AND?: Array<PasswordHistoryWhereInput>;

    @Field(() => [PasswordHistoryWhereInput], {nullable:true})
    OR?: Array<PasswordHistoryWhereInput>;

    @Field(() => [PasswordHistoryWhereInput], {nullable:true})
    NOT?: Array<PasswordHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

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
