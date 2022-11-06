import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordTokenUpdateWithoutUserInput } from './password-token-update-without-user.input';
import { Type } from 'class-transformer';
import { PasswordTokenCreateWithoutUserInput } from './password-token-create-without-user.input';

@InputType()
export class PasswordTokenUpsertWithoutUserInput {

    @Field(() => PasswordTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => PasswordTokenUpdateWithoutUserInput)
    update!: PasswordTokenUpdateWithoutUserInput;

    @Field(() => PasswordTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordTokenCreateWithoutUserInput)
    create!: PasswordTokenCreateWithoutUserInput;
}
