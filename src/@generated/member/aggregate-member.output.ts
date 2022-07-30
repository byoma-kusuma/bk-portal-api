import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MemberCountAggregate } from './member-count-aggregate.output';
import { MemberMinAggregate } from './member-min-aggregate.output';
import { MemberMaxAggregate } from './member-max-aggregate.output';

@ObjectType()
export class AggregateMember {

    @Field(() => MemberCountAggregate, {nullable:true})
    _count?: MemberCountAggregate;

    @Field(() => MemberMinAggregate, {nullable:true})
    _min?: MemberMinAggregate;

    @Field(() => MemberMaxAggregate, {nullable:true})
    _max?: MemberMaxAggregate;
}
