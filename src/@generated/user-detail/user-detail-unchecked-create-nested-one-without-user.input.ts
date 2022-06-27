import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserDetailCreateWithoutUserInput } from './user-detail-create-without-user.input';
import { Type } from 'class-transformer';
import { UserDetailCreateOrConnectWithoutUserInput } from './user-detail-create-or-connect-without-user.input';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';

@InputType()
export class UserDetailUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => UserDetailCreateWithoutUserInput, {nullable:true})
    @Type(() => UserDetailCreateWithoutUserInput)
    create?: UserDetailCreateWithoutUserInput;

    @Field(() => UserDetailCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserDetailCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput;

    @Field(() => UserDetailWhereUniqueInput, {nullable:true})
    @Type(() => UserDetailWhereUniqueInput)
    connect?: UserDetailWhereUniqueInput;
}
