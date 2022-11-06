import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenCreateInput } from './password-token-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePasswordTokenArgs {

    @Field(() => PasswordTokenCreateInput, {nullable:false})
    @Type(() => PasswordTokenCreateInput)
    data!: PasswordTokenCreateInput;
}
