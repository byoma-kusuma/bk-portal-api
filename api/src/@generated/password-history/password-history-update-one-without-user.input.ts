import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordHistoryCreateWithoutUserInput } from './password-history-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordHistoryCreateOrConnectWithoutUserInput } from './password-history-create-or-connect-without-user.input';
import { PasswordHistoryUpsertWithoutUserInput } from './password-history-upsert-without-user.input';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { PasswordHistoryUpdateWithoutUserInput } from './password-history-update-without-user.input';

@InputType()
export class PasswordHistoryUpdateOneWithoutUserInput {

    @Field(() => PasswordHistoryCreateWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryCreateWithoutUserInput)
    create?: PasswordHistoryCreateWithoutUserInput;

    @Field(() => PasswordHistoryCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput;

    @Field(() => PasswordHistoryUpsertWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryUpsertWithoutUserInput)
    upsert?: PasswordHistoryUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:true})
    @Type(() => PasswordHistoryWhereUniqueInput)
    connect?: PasswordHistoryWhereUniqueInput;

    @Field(() => PasswordHistoryUpdateWithoutUserInput, {nullable:true})
    @Type(() => PasswordHistoryUpdateWithoutUserInput)
    update?: PasswordHistoryUpdateWithoutUserInput;
}
