import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsUpdateWithoutGroupInput } from './member-groups-update-without-group.input';

@InputType()
export class MemberGroupsUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsUpdateWithoutGroupInput, {nullable:false})
    @Type(() => MemberGroupsUpdateWithoutGroupInput)
    data!: MemberGroupsUpdateWithoutGroupInput;
}
