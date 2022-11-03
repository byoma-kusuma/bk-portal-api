import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateWithoutMemberInput } from './member-groups-create-without-member.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateOrConnectWithoutMemberInput } from './member-groups-create-or-connect-without-member.input';
import { MemberGroupsUpsertWithWhereUniqueWithoutMemberInput } from './member-groups-upsert-with-where-unique-without-member.input';
import { MemberGroupsCreateManyMemberInputEnvelope } from './member-groups-create-many-member-input-envelope.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { MemberGroupsUpdateWithWhereUniqueWithoutMemberInput } from './member-groups-update-with-where-unique-without-member.input';
import { MemberGroupsUpdateManyWithWhereWithoutMemberInput } from './member-groups-update-many-with-where-without-member.input';
import { MemberGroupsScalarWhereInput } from './member-groups-scalar-where.input';

@InputType()
export class MemberGroupsUpdateManyWithoutMemberInput {

    @Field(() => [MemberGroupsCreateWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsCreateWithoutMemberInput)
    create?: Array<MemberGroupsCreateWithoutMemberInput>;

    @Field(() => [MemberGroupsCreateOrConnectWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsCreateOrConnectWithoutMemberInput)
    connectOrCreate?: Array<MemberGroupsCreateOrConnectWithoutMemberInput>;

    @Field(() => [MemberGroupsUpsertWithWhereUniqueWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsUpsertWithWhereUniqueWithoutMemberInput)
    upsert?: Array<MemberGroupsUpsertWithWhereUniqueWithoutMemberInput>;

    @Field(() => MemberGroupsCreateManyMemberInputEnvelope, {nullable:true})
    @Type(() => MemberGroupsCreateManyMemberInputEnvelope)
    createMany?: MemberGroupsCreateManyMemberInputEnvelope;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    set?: Array<MemberGroupsWhereUniqueInput>;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    disconnect?: Array<MemberGroupsWhereUniqueInput>;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    delete?: Array<MemberGroupsWhereUniqueInput>;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    connect?: Array<MemberGroupsWhereUniqueInput>;

    @Field(() => [MemberGroupsUpdateWithWhereUniqueWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsUpdateWithWhereUniqueWithoutMemberInput)
    update?: Array<MemberGroupsUpdateWithWhereUniqueWithoutMemberInput>;

    @Field(() => [MemberGroupsUpdateManyWithWhereWithoutMemberInput], {nullable:true})
    @Type(() => MemberGroupsUpdateManyWithWhereWithoutMemberInput)
    updateMany?: Array<MemberGroupsUpdateManyWithWhereWithoutMemberInput>;

    @Field(() => [MemberGroupsScalarWhereInput], {nullable:true})
    @Type(() => MemberGroupsScalarWhereInput)
    deleteMany?: Array<MemberGroupsScalarWhereInput>;
}
