import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPasswordTokenInput } from '../user/user-create-nested-one-without-password-token.input';

@InputType()
export class PasswordTokenCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPasswordTokenInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPasswordTokenInput;
}
