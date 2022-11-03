import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsUpdateWithoutGroupInput } from './member-groups-update-without-group.input';
import { MemberGroupsCreateWithoutGroupInput } from './member-groups-create-without-group.input';

@InputType()
export class MemberGroupsUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsUpdateWithoutGroupInput, {nullable:false})
    @Type(() => MemberGroupsUpdateWithoutGroupInput)
    update!: MemberGroupsUpdateWithoutGroupInput;

    @Field(() => MemberGroupsCreateWithoutGroupInput, {nullable:false})
    @Type(() => MemberGroupsCreateWithoutGroupInput)
    create!: MemberGroupsCreateWithoutGroupInput;
}
