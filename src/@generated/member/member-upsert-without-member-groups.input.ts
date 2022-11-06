import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberUpdateWithoutMemberGroupsInput } from './member-update-without-member-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutMemberGroupsInput } from './member-create-without-member-groups.input';

@InputType()
export class MemberUpsertWithoutMemberGroupsInput {

    @Field(() => MemberUpdateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => MemberUpdateWithoutMemberGroupsInput)
    update!: MemberUpdateWithoutMemberGroupsInput;

    @Field(() => MemberCreateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => MemberCreateWithoutMemberGroupsInput)
    create!: MemberCreateWithoutMemberGroupsInput;
}
