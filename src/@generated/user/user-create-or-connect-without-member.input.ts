import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';

@InputType()
export class UserCreateOrConnectWithoutMemberInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberInput)
    create!: UserCreateWithoutMemberInput;
}
