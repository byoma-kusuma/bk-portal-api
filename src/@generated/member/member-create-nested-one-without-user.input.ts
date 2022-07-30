import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutUserInput } from './member-create-or-connect-without-user.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedOneWithoutUserInput {

    @Field(() => MemberCreateWithoutUserInput, {nullable:true})
    @Type(() => MemberCreateWithoutUserInput)
    create?: MemberCreateWithoutUserInput;

    @Field(() => MemberCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;
}
