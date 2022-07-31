import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistoryCreateNestedOneWithoutUserInput } from '../password-history/password-history-create-nested-one-without-user.input';
import { MemberCreateNestedOneWithoutUserInput } from '../member/member-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    email?: string;

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

    @Field(() => MemberCreateNestedOneWithoutUserInput, {nullable:false})
    member!: MemberCreateNestedOneWithoutUserInput;
}
