import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryUpdateInput } from './password-history-update.input';
import { Type } from 'class-transformer';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';

@ArgsType()
export class UpdateOnePasswordHistoryArgs {

    @Field(() => PasswordHistoryUpdateInput, {nullable:false})
    @Type(() => PasswordHistoryUpdateInput)
    data!: PasswordHistoryUpdateInput;

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:false})
    @Type(() => PasswordHistoryWhereUniqueInput)
    where!: PasswordHistoryWhereUniqueInput;
}
