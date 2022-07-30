import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumUserStatusFilter } from '../prisma/enum-user-status-filter.input';
import { PasswordHistoryRelationFilter } from '../password-history/password-history-relation-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { MemberRelationFilter } from '../member/member-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatar?: StringFilter;

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

    @Field(() => EnumUserStatusFilter, {nullable:true})
    status?: EnumUserStatusFilter;

    @Field(() => PasswordHistoryRelationFilter, {nullable:true})
    passwordHistory?: PasswordHistoryRelationFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => MemberRelationFilter, {nullable:true})
    member?: MemberRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    memberId?: StringFilter;
}
