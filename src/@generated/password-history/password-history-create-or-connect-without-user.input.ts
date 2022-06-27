import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { Type } from 'class-transformer';
import { PasswordHistoryCreateWithoutUserInput } from './password-history-create-without-user.input';

@InputType()
export class PasswordHistoryCreateOrConnectWithoutUserInput {

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:false})
    @Type(() => PasswordHistoryWhereUniqueInput)
    where!: PasswordHistoryWhereUniqueInput;

    @Field(() => PasswordHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => PasswordHistoryCreateWithoutUserInput)
    create!: PasswordHistoryCreateWithoutUserInput;
}
