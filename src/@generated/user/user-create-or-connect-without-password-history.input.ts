import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordHistoryInput } from './user-create-without-password-history.input';

@InputType()
export class UserCreateOrConnectWithoutPasswordHistoryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPasswordHistoryInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordHistoryInput)
    create!: UserCreateWithoutPasswordHistoryInput;
}
