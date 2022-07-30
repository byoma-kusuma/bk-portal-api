import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPasswordHistoryInput } from '../user/user-create-nested-one-without-password-history.input';

@InputType()
export class PasswordHistoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => UserCreateNestedOneWithoutPasswordHistoryInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPasswordHistoryInput;
}
