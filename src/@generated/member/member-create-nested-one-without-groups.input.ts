import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutGroupsInput } from './member-create-without-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutGroupsInput } from './member-create-or-connect-without-groups.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedOneWithoutGroupsInput {

    @Field(() => MemberCreateWithoutGroupsInput, {nullable:true})
    @Type(() => MemberCreateWithoutGroupsInput)
    create?: MemberCreateWithoutGroupsInput;

    @Field(() => MemberCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: MemberCreateOrConnectWithoutGroupsInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;
}
