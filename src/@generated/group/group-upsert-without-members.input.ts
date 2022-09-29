import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutMembersInput } from './group-update-without-members.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutMembersInput } from './group-create-without-members.input';

@InputType()
export class GroupUpsertWithoutMembersInput {

    @Field(() => GroupUpdateWithoutMembersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutMembersInput)
    update!: GroupUpdateWithoutMembersInput;

    @Field(() => GroupCreateWithoutMembersInput, {nullable:false})
    @Type(() => GroupCreateWithoutMembersInput)
    create!: GroupCreateWithoutMembersInput;
}
