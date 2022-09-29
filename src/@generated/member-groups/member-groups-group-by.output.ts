import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberGroupsCountAggregate } from './member-groups-count-aggregate.output';
import { MemberGroupsAvgAggregate } from './member-groups-avg-aggregate.output';
import { MemberGroupsSumAggregate } from './member-groups-sum-aggregate.output';
import { MemberGroupsMinAggregate } from './member-groups-min-aggregate.output';
import { MemberGroupsMaxAggregate } from './member-groups-max-aggregate.output';

@ObjectType()
export class MemberGroupsGroupBy {

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => MemberGroupsCountAggregate, {nullable:true})
    _count?: MemberGroupsCountAggregate;

    @Field(() => MemberGroupsAvgAggregate, {nullable:true})
    _avg?: MemberGroupsAvgAggregate;

    @Field(() => MemberGroupsSumAggregate, {nullable:true})
    _sum?: MemberGroupsSumAggregate;

    @Field(() => MemberGroupsMinAggregate, {nullable:true})
    _min?: MemberGroupsMinAggregate;

    @Field(() => MemberGroupsMaxAggregate, {nullable:true})
    _max?: MemberGroupsMaxAggregate;
}
