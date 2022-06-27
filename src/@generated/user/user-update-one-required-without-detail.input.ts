import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDetailInput } from './user-create-without-detail.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDetailInput } from './user-create-or-connect-without-detail.input';
import { UserUpsertWithoutDetailInput } from './user-upsert-without-detail.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDetailInput } from './user-update-without-detail.input';

@InputType()
export class UserUpdateOneRequiredWithoutDetailInput {

    @Field(() => UserCreateWithoutDetailInput, {nullable:true})
    @Type(() => UserCreateWithoutDetailInput)
    create?: UserCreateWithoutDetailInput;

    @Field(() => UserCreateOrConnectWithoutDetailInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDetailInput)
    connectOrCreate?: UserCreateOrConnectWithoutDetailInput;

    @Field(() => UserUpsertWithoutDetailInput, {nullable:true})
    @Type(() => UserUpsertWithoutDetailInput)
    upsert?: UserUpsertWithoutDetailInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDetailInput, {nullable:true})
    @Type(() => UserUpdateWithoutDetailInput)
    update?: UserUpdateWithoutDetailInput;
}
