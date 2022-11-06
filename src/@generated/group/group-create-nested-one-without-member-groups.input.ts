import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutMemberGroupsInput } from './group-create-without-member-groups.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutMemberGroupsInput } from './group-create-or-connect-without-member-groups.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutMemberGroupsInput {

    @Field(() => GroupCreateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupCreateWithoutMemberGroupsInput)
    create?: GroupCreateWithoutMemberGroupsInput;

    @Field(() => GroupCreateOrConnectWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutMemberGroupsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutMemberGroupsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
