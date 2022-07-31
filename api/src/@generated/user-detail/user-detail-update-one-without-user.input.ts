import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserDetailCreateWithoutUserInput } from './user-detail-create-without-user.input';
import { Type } from 'class-transformer';
import { UserDetailCreateOrConnectWithoutUserInput } from './user-detail-create-or-connect-without-user.input';
import { UserDetailUpsertWithoutUserInput } from './user-detail-upsert-without-user.input';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { UserDetailUpdateWithoutUserInput } from './user-detail-update-without-user.input';

@InputType()
export class UserDetailUpdateOneWithoutUserInput {

    @Field(() => UserDetailCreateWithoutUserInput, {nullable:true})
    @Type(() => UserDetailCreateWithoutUserInput)
    create?: UserDetailCreateWithoutUserInput;

    @Field(() => UserDetailCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserDetailCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput;

    @Field(() => UserDetailUpsertWithoutUserInput, {nullable:true})
    @Type(() => UserDetailUpsertWithoutUserInput)
    upsert?: UserDetailUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserDetailWhereUniqueInput, {nullable:true})
    @Type(() => UserDetailWhereUniqueInput)
    connect?: UserDetailWhereUniqueInput;

    @Field(() => UserDetailUpdateWithoutUserInput, {nullable:true})
    @Type(() => UserDetailUpdateWithoutUserInput)
    update?: UserDetailUpdateWithoutUserInput;
}
