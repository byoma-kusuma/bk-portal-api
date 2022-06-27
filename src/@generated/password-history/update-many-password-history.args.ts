import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryUpdateManyMutationInput } from './password-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PasswordHistoryWhereInput } from './password-history-where.input';

@ArgsType()
export class UpdateManyPasswordHistoryArgs {

    @Field(() => PasswordHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => PasswordHistoryUpdateManyMutationInput)
    data!: PasswordHistoryUpdateManyMutationInput;

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    @Type(() => PasswordHistoryWhereInput)
    where?: PasswordHistoryWhereInput;
}
