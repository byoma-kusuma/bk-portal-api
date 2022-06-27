import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDetailInput } from './user-create-without-detail.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDetailInput } from './user-create-or-connect-without-detail.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDetailInput {

    @Field(() => UserCreateWithoutDetailInput, {nullable:true})
    @Type(() => UserCreateWithoutDetailInput)
    create?: UserCreateWithoutDetailInput;

    @Field(() => UserCreateOrConnectWithoutDetailInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDetailInput)
    connectOrCreate?: UserCreateOrConnectWithoutDetailInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
