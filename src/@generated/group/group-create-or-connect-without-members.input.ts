import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutMembersInput } from './group-create-without-members.input';

@InputType()
export class GroupCreateOrConnectWithoutMembersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutMembersInput, {nullable:false})
    @Type(() => GroupCreateWithoutMembersInput)
    create!: GroupCreateWithoutMembersInput;
}
