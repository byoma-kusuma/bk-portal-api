import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistoryUncheckedCreateNestedOneWithoutUserInput } from '../password-history/password-history-unchecked-create-nested-one-without-user.input';
import { PasswordTokenUncheckedCreateNestedOneWithoutUserInput } from '../password-token/password-token-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => PasswordHistoryUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    passwordHistory?: PasswordHistoryUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PasswordTokenUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    passwordToken?: PasswordTokenUncheckedCreateNestedOneWithoutUserInput;
}
