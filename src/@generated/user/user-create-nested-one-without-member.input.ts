import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberInput } from './user-create-or-connect-without-member.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemberInput {

    @Field(() => UserCreateWithoutMemberInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberInput)
    create?: UserCreateWithoutMemberInput;

    @Field(() => UserCreateOrConnectWithoutMemberInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
