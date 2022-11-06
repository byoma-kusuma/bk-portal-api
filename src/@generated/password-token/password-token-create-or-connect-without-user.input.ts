import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordTokenCreateWithoutUserInput } from './password-token-create-without-user.input';

@InputType()
export class PasswordTokenCreateOrConnectWithoutUserInput {

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordTokenWhereUniqueInput)
    where!: PasswordTokenWhereUniqueInput;

    @Field(() => PasswordTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordTokenCreateWithoutUserInput)
    create!: PasswordTokenCreateWithoutUserInput;
}
