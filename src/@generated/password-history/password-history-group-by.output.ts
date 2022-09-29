import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PasswordHistoryCountAggregate } from './password-history-count-aggregate.output';
import { PasswordHistoryAvgAggregate } from './password-history-avg-aggregate.output';
import { PasswordHistorySumAggregate } from './password-history-sum-aggregate.output';
import { PasswordHistoryMinAggregate } from './password-history-min-aggregate.output';
import { PasswordHistoryMaxAggregate } from './password-history-max-aggregate.output';

@ObjectType()
export class PasswordHistoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

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
