import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateWithoutMemberInput } from './member-groups-create-without-member.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateOrConnectWithoutMemberInput } from './member-groups-create-or-connect-without-member.input';
import { MemberGroupsCreateManyMemberInputEnvelope } from './member-groups-create-many-member-input-envelope.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';

@InputType()
export class MemberGroupsCreateNestedManyWithoutMemberInput {

    @Field(() => [MemberGroupsCreateWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsCreateWithoutMemberInput)
    create?: Array<MemberGroupsCreateWithoutMemberInput>;

    @Field(() => [MemberGroupsCreateOrConnectWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsCreateOrConnectWithoutMemberInput)
    connectOrCreate?: Array<MemberGroupsCreateOrConnectWithoutMemberInput>;

    @Field(() => MemberGroupsCreateManyMemberInputEnvelope, {nullable:true})
    @Type(() => MemberGroupsCreateManyMemberInputEnvelope)
    createMany?: MemberGroupsCreateManyMemberInputEnvelope;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    connect?: Array<MemberGroupsWhereUniqueInput>;
}
