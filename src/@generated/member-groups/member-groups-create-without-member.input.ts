import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedOneWithoutMemberGroupsInput } from '../group/group-create-nested-one-without-member-groups.input';

@InputType()
export class MemberGroupsCreateWithoutMemberInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => GroupCreateNestedOneWithoutMemberGroupsInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutMemberGroupsInput;
}
