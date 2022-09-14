import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePasswordTokenArgs {

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordTokenWhereUniqueInput)
    where!: PasswordTokenWhereUniqueInput;
}
