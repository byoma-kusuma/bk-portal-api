import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordHistoryCreateInput } from './password-history-create.input';
import { PasswordHistoryUpdateInput } from './password-history-update.input';

@ArgsType()
export class UpsertOnePasswordHistoryArgs {

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:false})
    @Type(() => PasswordHistoryWhereUniqueInput)
    where!: PasswordHistoryWhereUniqueInput;

    @Field(() => PasswordHistoryCreateInput, {nullable:false})
    @Type(() => PasswordHistoryCreateInput)
    create!: PasswordHistoryCreateInput;

    @Field(() => PasswordHistoryUpdateInput, {nullable:false})
    @Type(() => PasswordHistoryUpdateInput)
    update!: PasswordHistoryUpdateInput;
}
