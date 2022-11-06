import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordTokenCreateWithoutUserInput } from './password-token-create-without-user.input';
import { Type } from 'class-transformer';
import { PasswordTokenCreateOrConnectWithoutUserInput } from './password-token-create-or-connect-without-user.input';
import { PasswordTokenUpsertWithoutUserInput } from './password-token-upsert-without-user.input';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { PasswordTokenUpdateWithoutUserInput } from './password-token-update-without-user.input';

@InputType()
export class PasswordTokenUpdateOneWithoutUserInput {

    @Field(() => PasswordTokenCreateWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenCreateWithoutUserInput)
    create?: PasswordTokenCreateWithoutUserInput;

    @Field(() => PasswordTokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: PasswordTokenCreateOrConnectWithoutUserInput;

    @Field(() => PasswordTokenUpsertWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenUpsertWithoutUserInput)
    upsert?: PasswordTokenUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:true})
    @Type(() => PasswordTokenWhereUniqueInput)
    connect?: PasswordTokenWhereUniqueInput;

    @Field(() => PasswordTokenUpdateWithoutUserInput, {nullable:true})
    @Type(() => PasswordTokenUpdateWithoutUserInput)
    update?: PasswordTokenUpdateWithoutUserInput;
}
