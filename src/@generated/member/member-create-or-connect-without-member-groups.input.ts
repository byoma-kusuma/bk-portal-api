import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutMemberGroupsInput } from './member-create-without-member-groups.input';

@InputType()
export class MemberCreateOrConnectWithoutMemberGroupsInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => MemberCreateWithoutMemberGroupsInput)
    create!: MemberCreateWithoutMemberGroupsInput;
}
