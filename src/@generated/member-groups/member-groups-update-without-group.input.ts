import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberUpdateOneRequiredWithoutMemberGroupsInput } from '../member/member-update-one-required-without-member-groups.input';

@InputType()
export class MemberGroupsUpdateWithoutGroupInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => MemberUpdateOneRequiredWithoutMemberGroupsInput, {nullable:true})
    member?: MemberUpdateOneRequiredWithoutMemberGroupsInput;
}
