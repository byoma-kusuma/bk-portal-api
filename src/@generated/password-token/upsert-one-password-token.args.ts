import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordTokenCreateInput } from './password-token-create.input';
import { PasswordTokenUpdateInput } from './password-token-update.input';

@ArgsType()
export class UpsertOnePasswordTokenArgs {

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:false})
    @Type(() => PasswordTokenWhereUniqueInput)
    where!: PasswordTokenWhereUniqueInput;

    @Field(() => PasswordTokenCreateInput, {nullable:false})
    @Type(() => PasswordTokenCreateInput)
    create!: PasswordTokenCreateInput;

    @Field(() => PasswordTokenUpdateInput, {nullable:false})
    @Type(() => PasswordTokenUpdateInput)
    update!: PasswordTokenUpdateInput;
}
