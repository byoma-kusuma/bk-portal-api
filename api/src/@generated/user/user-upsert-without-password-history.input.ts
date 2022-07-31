import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPasswordHistoryInput } from './user-update-without-password-history.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordHistoryInput } from './user-create-without-password-history.input';

@InputType()
export class UserUpsertWithoutPasswordHistoryInput {

    @Field(() => UserUpdateWithoutPasswordHistoryInput, {nullable:false})
    @Type(() => UserUpdateWithoutPasswordHistoryInput)
    update!: UserUpdateWithoutPasswordHistoryInput;

    @Field(() => UserCreateWithoutPasswordHistoryInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordHistoryInput)
    create!: UserCreateWithoutPasswordHistoryInput;
}
