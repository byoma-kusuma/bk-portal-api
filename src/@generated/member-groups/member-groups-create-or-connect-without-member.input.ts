import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateWithoutMemberInput } from './member-groups-create-without-member.input';

@InputType()
export class MemberGroupsCreateOrConnectWithoutMemberInput {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsCreateWithoutMemberInput, {nullable:false})
    @Type(() => MemberGroupsCreateWithoutMemberInput)
    create!: MemberGroupsCreateWithoutMemberInput;
}
