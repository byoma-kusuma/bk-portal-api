import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistoryCreateNestedOneWithoutUserInput } from '../password-history/password-history-create-nested-one-without-user.input';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { MemberCreateNestedOneWithoutUserInput } from '../member/member-create-nested-one-without-user.input';
import { PasswordTokenCreateNestedOneWithoutUserInput } from '../password-token/password-token-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => UserStatus, {nullable:true})
    status?: keyof typeof UserStatus;

    @Field(() => PasswordHistoryCreateNestedOneWithoutUserInput, {nullable:true})
    passwordHistory?: PasswordHistoryCreateNestedOneWithoutUserInput;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => MemberCreateNestedOneWithoutUserInput, {nullable:false})
    member!: MemberCreateNestedOneWithoutUserInput;

    @Field(() => PasswordTokenCreateNestedOneWithoutUserInput, {nullable:true})
    passwordToken?: PasswordTokenCreateNestedOneWithoutUserInput;
}
