import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateOneRequiredWithoutMemberGroupsInput } from '../group/group-update-one-required-without-member-groups.input';

@InputType()
export class MemberGroupsUpdateWithoutMemberInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => GroupUpdateOneRequiredWithoutMemberGroupsInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutMemberGroupsInput;
}
