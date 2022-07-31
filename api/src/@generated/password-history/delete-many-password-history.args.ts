import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereInput } from './password-history-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPasswordHistoryArgs {

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    @Type(() => PasswordHistoryWhereInput)
    where?: PasswordHistoryWhereInput;
}
