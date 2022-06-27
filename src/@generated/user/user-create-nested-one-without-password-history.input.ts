import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordHistoryInput } from './user-create-without-password-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordHistoryInput } from './user-create-or-connect-without-password-history.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPasswordHistoryInput {

    @Field(() => UserCreateWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordHistoryInput)
    create?: UserCreateWithoutPasswordHistoryInput;

    @Field(() => UserCreateOrConnectWithoutPasswordHistoryInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordHistoryInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordHistoryInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
