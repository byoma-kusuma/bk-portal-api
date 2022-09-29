import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutMemberGroupsInput } from './group-update-without-member-groups.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutMemberGroupsInput } from './group-create-without-member-groups.input';

@InputType()
export class GroupUpsertWithoutMemberGroupsInput {

    @Field(() => GroupUpdateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutMemberGroupsInput)
    update!: GroupUpdateWithoutMemberGroupsInput;

    @Field(() => GroupCreateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => GroupCreateWithoutMemberGroupsInput)
    create!: GroupCreateWithoutMemberGroupsInput;
}
