import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserDetailUncheckedCreateNestedOneWithoutUserInput } from '../user-detail/user-detail-unchecked-create-nested-one-without-user.input';
import { PasswordHistoryUncheckedCreateNestedOneWithoutUserInput } from '../password-history/password-history-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => UserDetailUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    detail?: UserDetailUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PasswordHistoryUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    passwordHistory?: PasswordHistoryUncheckedCreateNestedOneWithoutUserInput;
}
