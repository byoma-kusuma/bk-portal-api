import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsWhereInput } from './member-groups-where.input';

@InputType()
export class MemberGroupsListRelationFilter {

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    every?: MemberGroupsWhereInput;

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    some?: MemberGroupsWhereInput;

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    none?: MemberGroupsWhereInput;
}
