import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateManyMemberInput } from './member-groups-create-many-member.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberGroupsCreateManyMemberInputEnvelope {

    @Field(() => [MemberGroupsCreateManyMemberInput], {nullable:false})
    @Type(() => MemberGroupsCreateManyMemberInput)
    data!: Array<MemberGroupsCreateManyMemberInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
