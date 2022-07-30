import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemberInput } from './user-update-without-member.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';

@InputType()
export class UserUpsertWithoutMemberInput {

    @Field(() => UserUpdateWithoutMemberInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemberInput)
    update!: UserUpdateWithoutMemberInput;

    @Field(() => UserCreateWithoutMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberInput)
    create!: UserCreateWithoutMemberInput;
}
