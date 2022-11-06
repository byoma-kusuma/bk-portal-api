import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Type } from 'class-transformer';
import { MemberGroupsCreateInput } from './member-groups-create.input';
import { MemberGroupsUpdateInput } from './member-groups-update.input';

@ArgsType()
export class UpsertOneMemberGroupsArgs {

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:false})
    @Type(() => MemberGroupsWhereUniqueInput)
    where!: MemberGroupsWhereUniqueInput;

    @Field(() => MemberGroupsCreateInput, {nullable:false})
    @Type(() => MemberGroupsCreateInput)
    create!: MemberGroupsCreateInput;

    @Field(() => MemberGroupsUpdateInput, {nullable:false})
    @Type(() => MemberGroupsUpdateInput)
    update!: MemberGroupsUpdateInput;
}
