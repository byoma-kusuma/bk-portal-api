import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { RoleUpdateOneRequiredWithoutUsersInput } from '../role/role-update-one-required-without-users.input';
import { MemberUpdateOneRequiredWithoutUserInput } from '../member/member-update-one-required-without-user.input';

@InputType()
export class UserUpdateWithoutPasswordHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userName?: string;

    @Field(() => String, {nullable:true})
    password?: string;

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

    @Field(() => RoleUpdateOneRequiredWithoutUsersInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersInput;

    @Field(() => MemberUpdateOneRequiredWithoutUserInput, {nullable:true})
    member?: MemberUpdateOneRequiredWithoutUserInput;
}
