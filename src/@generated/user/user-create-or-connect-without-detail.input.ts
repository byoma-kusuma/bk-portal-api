import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDetailInput } from './user-create-without-detail.input';

@InputType()
export class UserCreateOrConnectWithoutDetailInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDetailInput, {nullable:false})
    @Type(() => UserCreateWithoutDetailInput)
    create!: UserCreateWithoutDetailInput;
}
