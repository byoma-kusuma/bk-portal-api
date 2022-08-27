import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistoryUpdateOneWithoutUserInput } from '../password-history/password-history-update-one-without-user.input';
import { MemberUpdateOneRequiredWithoutUserInput } from '../member/member-update-one-required-without-user.input';
import { PasswordTokenUpdateOneWithoutUserInput } from '../password-token/password-token-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userName?: string;

    @Field(() => String, {nullable:true})
    password?: string;

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

    @Field(() => PasswordHistoryUpdateOneWithoutUserInput, {nullable:true})
    passwordHistory?: PasswordHistoryUpdateOneWithoutUserInput;

    @Field(() => MemberUpdateOneRequiredWithoutUserInput, {nullable:true})
    member?: MemberUpdateOneRequiredWithoutUserInput;

    @Field(() => PasswordTokenUpdateOneWithoutUserInput, {nullable:true})
    passwordToken?: PasswordTokenUpdateOneWithoutUserInput;
}
