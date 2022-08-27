import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordTokenCreateWithoutUserInput } from './password-token-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordTokenCreateOrConnectWithoutUserInput } from './password-token-create-or-connect-without-user.input';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';

@InputType()
export class PasswordTokenCreateNestedOneWithoutUserInput {

    @Field(() => PasswordTokenCreateWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenCreateWithoutUserInput)
    create?: PasswordTokenCreateWithoutUserInput;

    @Field(() => PasswordTokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: PasswordTokenCreateOrConnectWithoutUserInput;

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:true})
    @Type(() => PasswordTokenWhereUniqueInput)
    connect?: PasswordTokenWhereUniqueInput;
}
