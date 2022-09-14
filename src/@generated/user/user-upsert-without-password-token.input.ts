import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPasswordTokenInput } from './user-update-without-password-token.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPasswordTokenInput } from './user-create-without-password-token.input';

@InputType()
export class UserUpsertWithoutPasswordTokenInput {

    @Field(() => UserUpdateWithoutPasswordTokenInput, {nullable:false})
    @Type(() => UserUpdateWithoutPasswordTokenInput)
    update!: UserUpdateWithoutPasswordTokenInput;

    @Field(() => UserCreateWithoutPasswordTokenInput, {nullable:false})
    @Type(() => UserCreateWithoutPasswordTokenInput)
    create!: UserCreateWithoutPasswordTokenInput;
}
