import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenUpdateInput } from './password-token-update.input';
import { Type } from 'class-transformer';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';

@ArgsType()
export class UpdateOnePasswordTokenArgs {

    @Field(() => PasswordTokenUpdateInput, {nullable:false})
    @Type(() => PasswordTokenUpdateInput)
    data!: PasswordTokenUpdateInput;

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordTokenWhereUniqueInput)
    where!: PasswordTokenWhereUniqueInput;
}
