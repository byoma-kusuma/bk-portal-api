import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemberCountAggregate } from './member-count-aggregate.output';
import { MemberAvgAggregate } from './member-avg-aggregate.output';
import { MemberSumAggregate } from './member-sum-aggregate.output';
import { MemberMinAggregate } from './member-min-aggregate.output';
import { MemberMaxAggregate } from './member-max-aggregate.output';

@ObjectType()
export class AggregateMember {

    @Field(() => MemberCountAggregate, {nullable:true})
    _count?: MemberCountAggregate;

    @Field(() => MemberAvgAggregate, {nullable:true})
    _avg?: MemberAvgAggregate;

    @Field(() => MemberSumAggregate, {nullable:true})
    _sum?: MemberSumAggregate;

    @Field(() => MemberMinAggregate, {nullable:true})
    _min?: MemberMinAggregate;

    @Field(() => MemberMaxAggregate, {nullable:true})
    _max?: MemberMaxAggregate;
}
