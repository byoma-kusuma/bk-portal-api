import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordHistoryInput } from './user-create-without-password-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordHistoryInput } from './user-create-or-connect-without-password-history.input';
import { UserUpsertWithoutPasswordHistoryInput } from './user-upsert-without-password-history.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPasswordHistoryInput } from './user-update-without-password-history.input';

@InputType()
export class UserUpdateOneRequiredWithoutPasswordHistoryInput {

    @Field(() => UserCreateWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordHistoryInput)
    create?: UserCreateWithoutPasswordHistoryInput;

    @Field(() => UserCreateOrConnectWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordHistoryInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordHistoryInput;

    @Field(() => UserUpsertWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserUpsertWithoutPasswordHistoryInput)
    upsert?: UserUpsertWithoutPasswordHistoryInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserUpdateWithoutPasswordHistoryInput)
    update?: UserUpdateWithoutPasswordHistoryInput;
}
