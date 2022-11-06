import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsUpdateWithoutMemberInput } from './member-groups-update-without-member.input';
import { MemberGroupsCreateWithoutMemberInput } from './member-groups-create-without-member.input';

@InputType()
export class MemberGroupsUpsertWithWhereUniqueWithoutMemberInput {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsUpdateWithoutMemberInput, {nullable:false})
    @Type(() => MemberGroupsUpdateWithoutMemberInput)
    update!: MemberGroupsUpdateWithoutMemberInput;

    @Field(() => MemberGroupsCreateWithoutMemberInput, {nullable:false})
    @Type(() => MemberGroupsCreateWithoutMemberInput)
    create!: MemberGroupsCreateWithoutMemberInput;
}
