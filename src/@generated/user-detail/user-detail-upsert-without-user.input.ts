import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserDetailUpdateWithoutUserInput } from './user-detail-update-without-user.input';
import { Type } from 'class-transformer';
import { UserDetailCreateWithoutUserInput } from './user-detail-create-without-user.input';

@InputType()
export class UserDetailUpsertWithoutUserInput {

    @Field(() => UserDetailUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserDetailUpdateWithoutUserInput)
    update!: UserDetailUpdateWithoutUserInput;

    @Field(() => UserDetailCreateWithoutUserInput, {nullable:false})
    @Type(() => UserDetailCreateWithoutUserInput)
    create!: UserDetailCreateWithoutUserInput;
}
