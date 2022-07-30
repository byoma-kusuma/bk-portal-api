import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberInput } from './user-create-without-member.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberInput } from './user-create-or-connect-without-member.input';
import { UserUpsertWithoutMemberInput } from './user-upsert-without-member.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMemberInput } from './user-update-without-member.input';

@InputType()
export class UserUpdateOneRequiredWithoutMemberInput {

    @Field(() => UserCreateWithoutMemberInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberInput)
    create?: UserCreateWithoutMemberInput;

    @Field(() => UserCreateOrConnectWithoutMemberInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput;

    @Field(() => UserUpsertWithoutMemberInput, {nullable:true})
    @Type(() => UserUpsertWithoutMemberInput)
    upsert?: UserUpsertWithoutMemberInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMemberInput, {nullable:true})
    @Type(() => UserUpdateWithoutMemberInput)
    update?: UserUpdateWithoutMemberInput;
}
