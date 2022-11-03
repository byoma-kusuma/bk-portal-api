import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsUpdateInput } from './member-groups-update.input';
import { Type } from 'class-transformer';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';

@ArgsType()
export class UpdateOneMemberGroupsArgs {

    @Field(() => MemberGroupsUpdateInput, {nullable:false})
    @Type(() => MemberGroupsUpdateInput)
    data!: MemberGroupsUpdateInput;

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;
}
