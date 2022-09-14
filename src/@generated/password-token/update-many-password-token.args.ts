import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenUpdateManyMutationInput } from './password-token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PasswordTokenWhereInput } from './password-token-where.input';

@ArgsType()
export class UpdateManyPasswordTokenArgs {

    @Field(() => PasswordTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => PasswordTokenUpdateManyMutationInput)
    data!: PasswordTokenUpdateManyMutationInput;

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    @Type(() => PasswordTokenWhereInput)
    where?: PasswordTokenWhereInput;
}
