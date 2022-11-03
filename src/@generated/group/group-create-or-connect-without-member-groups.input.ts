import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutMemberGroupsInput } from './group-create-without-member-groups.input';

@InputType()
export class GroupCreateOrConnectWithoutMemberGroupsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutMemberGroupsInput, {nullable:false})
    @Type(() => GroupCreateWithoutMemberGroupsInput)
    create!: GroupCreateWithoutMemberGroupsInput;
}
