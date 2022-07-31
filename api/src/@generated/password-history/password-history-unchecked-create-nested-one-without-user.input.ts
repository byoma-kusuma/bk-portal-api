import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordHistoryCreateWithoutUserInput } from './password-history-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordHistoryCreateOrConnectWithoutUserInput } from './password-history-create-or-connect-without-user.input';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';

@InputType()
export class PasswordHistoryUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => PasswordHistoryCreateWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryCreateWithoutUserInput)
    create?: PasswordHistoryCreateWithoutUserInput;

    @Field(() => PasswordHistoryCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput;

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:true})
    @Type(() => PasswordHistoryWhereUniqueInput)
    connect?: PasswordHistoryWhereUniqueInput;
}
