import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordHistoryUpdateWithoutUserInput } from './password-history-update-without-user.input';
import { Type } from 'class-transformer';
import { PasswordHistoryCreateWithoutUserInput } from './password-history-create-without-user.input';

@InputType()
export class PasswordHistoryUpsertWithoutUserInput {

    @Field(() => PasswordHistoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => PasswordHistoryUpdateWithoutUserInput)
    update!: PasswordHistoryUpdateWithoutUserInput;

    @Field(() => PasswordHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordHistoryCreateWithoutUserInput)
    create!: PasswordHistoryCreateWithoutUserInput;
}
