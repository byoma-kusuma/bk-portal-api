import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateWithoutGroupInput } from './member-groups-create-without-group.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateOrConnectWithoutGroupInput } from './member-groups-create-or-connect-without-group.input';
import { MemberGroupsCreateManyGroupInputEnvelope } from './member-groups-create-many-group-input-envelope.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';

@InputType()
export class MemberGroupsUncheckedCreateNestedManyWithoutGroupInput {

    @Field(() => [MemberGroupsCreateWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsCreateWithoutGroupInput)
    create?: Array<MemberGroupsCreateWithoutGroupInput>;

    @Field(() => [MemberGroupsCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => MemberGroupsCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<MemberGroupsCreateOrConnectWithoutGroupInput>;

    @Field(() => MemberGroupsCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => MemberGroupsCreateManyGroupInputEnvelope)
    createMany?: MemberGroupsCreateManyGroupInputEnvelope;

    @Field(() => [MemberGroupsWhereUniqueInput], {nullable:true})
    @Type(() => MemberGroupsWhereUniqueInput)
    connect?: Array<MemberGroupsWhereUniqueInput>;
}
