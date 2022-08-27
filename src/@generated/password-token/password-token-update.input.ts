import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutPasswordTokenInput } from '../user/user-update-one-required-without-password-token.input';

@InputType()
export class PasswordTokenUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutPasswordTokenInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPasswordTokenInput;
}
