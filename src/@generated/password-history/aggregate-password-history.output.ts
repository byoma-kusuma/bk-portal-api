import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PasswordHistoryCountAggregate } from './password-history-count-aggregate.output';
import { PasswordHistoryAvgAggregate } from './password-history-avg-aggregate.output';
import { PasswordHistorySumAggregate } from './password-history-sum-aggregate.output';
import { PasswordHistoryMinAggregate } from './password-history-min-aggregate.output';
import { PasswordHistoryMaxAggregate } from './password-history-max-aggregate.output';

@ObjectType()
export class AggregatePasswordHistory {

    @Field(() => PasswordHistoryCountAggregate, {nullable:true})
    _count?: PasswordHistoryCountAggregate;

    @Field(() => PasswordHistoryAvgAggregate, {nullable:true})
    _avg?: PasswordHistoryAvgAggregate;

    @Field(() => PasswordHistorySumAggregate, {nullable:true})
    _sum?: PasswordHistorySumAggregate;

    @Field(() => PasswordHistoryMinAggregate, {nullable:true})
    _min?: PasswordHistoryMinAggregate;

    @Field(() => PasswordHistoryMaxAggregate, {nullable:true})
    _max?: PasswordHistoryMaxAggregate;
}
