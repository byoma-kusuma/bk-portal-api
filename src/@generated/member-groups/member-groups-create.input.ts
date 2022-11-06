import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateNestedOneWithoutMemberGroupsInput } from '../member/member-create-nested-one-without-member-groups.input';
import { GroupCreateNestedOneWithoutMemberGroupsInput } from '../group/group-create-nested-one-without-member-groups.input';

@InputType()
export class MemberGroupsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => MemberCreateNestedOneWithoutMemberGroupsInput, {nullable:false})
    member!: MemberCreateNestedOneWithoutMemberGroupsInput;

    @Field(() => GroupCreateNestedOneWithoutMemberGroupsInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutMemberGroupsInput;
}
