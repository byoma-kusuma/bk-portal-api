import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPasswordTokenInput } from './user-create-without-password-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPasswordTokenInput } from './user-create-or-connect-without-password-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPasswordTokenInput {

    @Field(() => UserCreateWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutPasswordTokenInput)
    create?: UserCreateWithoutPasswordTokenInput;

    @Field(() => UserCreateOrConnectWithoutPasswordTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPasswordTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutPasswordTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
