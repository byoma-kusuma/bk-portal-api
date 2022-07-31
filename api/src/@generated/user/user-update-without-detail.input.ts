import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistoryUpdateOneWithoutUserInput } from '../password-history/password-history-update-one-without-user.input';
import { RoleUpdateOneRequiredWithoutUsersInput } from '../role/role-update-one-required-without-users.input';

@InputType()
export class UserUpdateWithoutDetailInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

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

    @Field(() => RoleUpdateOneRequiredWithoutUsersInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersInput;
}
