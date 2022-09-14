import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereInput } from './password-token-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPasswordTokenArgs {

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    @Type(() => PasswordTokenWhereInput)
    where?: PasswordTokenWhereInput;
}
