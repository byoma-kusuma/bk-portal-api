import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDetailInput } from './user-update-without-detail.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDetailInput } from './user-create-without-detail.input';

@InputType()
export class UserUpsertWithoutDetailInput {

    @Field(() => UserUpdateWithoutDetailInput, {nullable:false})
    @Type(() => UserUpdateWithoutDetailInput)
    update!: UserUpdateWithoutDetailInput;

    @Field(() => UserCreateWithoutDetailInput, {nullable:false})
    @Type(() => UserCreateWithoutDetailInput)
    create!: UserCreateWithoutDetailInput;
}
