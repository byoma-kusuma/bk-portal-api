import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateWithoutGroupInput } from './member-groups-create-without-group.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateOrConnectWithoutGroupInput } from './member-groups-create-or-connect-without-group.input';
import { MemberGroupsUpsertWithWhereUniqueWithoutGroupInput } from './member-groups-upsert-with-where-unique-without-group.input';
import { MemberGroupsCreateManyGroupInputEnvelope } from './member-groups-create-many-group-input-envelope.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { MemberGroupsUpdateWithWhereUniqueWithoutGroupInput } from './member-groups-update-with-where-unique-without-group.input';
import { MemberGroupsUpdateManyWithWhereWithoutGroupInput } from './member-groups-update-many-with-where-without-group.input';
import { MemberGroupsScalarWhereInput } from './member-groups-scalar-where.input';

@InputType()
export class MemberGroupsUncheckedUpdateManyWithoutGroupInput {

    @Field(() => [MemberGroupsCreateWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsCreateWithoutGroupInput)
    create?: Array<MemberGroupsCreateWithoutGroupInput>;

    @Field(() => [MemberGroupsCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<MemberGroupsCreateOrConnectWithoutGroupInput>;

    @Field(() => [MemberGroupsUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<MemberGroupsUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => MemberGroupsCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => MemberGroupsCreateManyGroupInputEnvelope)
    createMany?: MemberGroupsCreateManyGroupInputEnvelope;

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

    @Field(() => [MemberGroupsUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<MemberGroupsUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [MemberGroupsUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<MemberGroupsUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [MemberGroupsScalarWhereInput], {nullable:true})
    @Type(() => MemberGroupsScalarWhereInput)
    deleteMany?: Array<MemberGroupsScalarWhereInput>;
}
