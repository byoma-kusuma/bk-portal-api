import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsCreateInput } from './member-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberGroupsArgs {

    @Field(() => MemberGroupsCreateInput, {nullable:false})
    @Type(() => MemberGroupsCreateInput)
    data!: MemberGroupsCreateInput;
}
