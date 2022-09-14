import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordTokenInput } from './user-create-without-password-token.input';

@InputType()
export class UserCreateOrConnectWithoutPasswordTokenInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPasswordTokenInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordTokenInput)
    create!: UserCreateWithoutPasswordTokenInput;
}
