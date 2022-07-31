import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { Type } from 'class-transformer';
import { UserDetailCreateWithoutUserInput } from './user-detail-create-without-user.input';

@InputType()
export class UserDetailCreateOrConnectWithoutUserInput {

    @Field(() => UserDetailWhereUniqueInput, {nullable:false})
    @Type(() => UserDetailWhereUniqueInput)
    where!: UserDetailWhereUniqueInput;

    @Field(() => UserDetailCreateWithoutUserInput, {nullable:false})
    @Type(() => UserDetailCreateWithoutUserInput)
    create!: UserDetailCreateWithoutUserInput;
}
