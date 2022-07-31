import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from '../prisma/type.enum';
import { UserUpdateManyWithoutRoleInput } from '../user/user-update-many-without-role.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Type, {nullable:true})
    roleType?: keyof typeof Type;

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

    @Field(() => UserUpdateManyWithoutRoleInput, {nullable:true})
    users?: UserUpdateManyWithoutRoleInput;
}
