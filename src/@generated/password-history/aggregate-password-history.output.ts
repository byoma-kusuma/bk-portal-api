import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PasswordHistoryCountAggregate } from './password-history-count-aggregate.output';
import { PasswordHistoryMinAggregate } from './password-history-min-aggregate.output';
import { PasswordHistoryMaxAggregate } from './password-history-max-aggregate.output';

@ObjectType()
export class AggregatePasswordHistory {

    @Field(() => PasswordHistoryCountAggregate, {nullable:true})
    _count?: PasswordHistoryCountAggregate;

    @Field(() => PasswordHistoryMinAggregate, {nullable:true})
    _min?: PasswordHistoryMinAggregate;

    @Field(() => PasswordHistoryMaxAggregate, {nullable:true})
    _max?: PasswordHistoryMaxAggregate;
}
