import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutMemberGroupsInput } from './member-create-without-member-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutMemberGroupsInput } from './member-create-or-connect-without-member-groups.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedOneWithoutMemberGroupsInput {

    @Field(() => MemberCreateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberCreateWithoutMemberGroupsInput)
    create?: MemberCreateWithoutMemberGroupsInput;

    @Field(() => MemberCreateOrConnectWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutMemberGroupsInput)
    connectOrCreate?: MemberCreateOrConnectWithoutMemberGroupsInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;
}
