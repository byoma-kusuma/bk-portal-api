import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsMemberIdGroupIdCompoundUniqueInput } from './member-groups-member-id-group-id-compound-unique.input';

@InputType()
export class MemberGroupsWhereUniqueInput {

    @Field(() => MemberGroupsMemberIdGroupIdCompoundUniqueInput, {nullable:true})
    memberId_groupId?: MemberGroupsMemberIdGroupIdCompoundUniqueInput;
}
