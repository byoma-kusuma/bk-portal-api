import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordTokenInput } from './user-create-without-password-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordTokenInput } from './user-create-or-connect-without-password-token.input';
import { UserUpsertWithoutPasswordTokenInput } from './user-upsert-without-password-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPasswordTokenInput } from './user-update-without-password-token.input';

@InputType()
export class UserUpdateOneRequiredWithoutPasswordTokenInput {

    @Field(() => UserCreateWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordTokenInput)
    create?: UserCreateWithoutPasswordTokenInput;

    @Field(() => UserCreateOrConnectWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordTokenInput;

    @Field(() => UserUpsertWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserUpsertWithoutPasswordTokenInput)
    upsert?: UserUpsertWithoutPasswordTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserUpdateWithoutPasswordTokenInput)
    update?: UserUpdateWithoutPasswordTokenInput;
}
