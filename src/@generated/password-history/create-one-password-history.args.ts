import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryCreateInput } from './password-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePasswordHistoryArgs {

    @Field(() => PasswordHistoryCreateInput, {nullable:false})
    @Type(() => PasswordHistoryCreateInput)
    data!: PasswordHistoryCreateInput;
}
