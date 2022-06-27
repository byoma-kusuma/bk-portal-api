import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePasswordHistoryArgs {

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:false})
    @Type(() => PasswordHistoryWhereUniqueInput)
    where!: PasswordHistoryWhereUniqueInput;
}
