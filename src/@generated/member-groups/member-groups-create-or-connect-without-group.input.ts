import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateWithoutGroupInput } from './member-groups-create-without-group.input';

@InputType()
export class MemberGroupsCreateOrConnectWithoutGroupInput {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsCreateWithoutGroupInput, {nullable:false})
    @Type(() => MemberGroupsCreateWithoutGroupInput)
    create!: MemberGroupsCreateWithoutGroupInput;
}
