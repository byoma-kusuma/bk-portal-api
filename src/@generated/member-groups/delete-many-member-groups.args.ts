import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsWhereInput } from './member-groups-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemberGroupsArgs {

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    @Type(() => MemberGroupsWhereInput)
    where?: MemberGroupsWhereInput;
}
