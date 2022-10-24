import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CentreCountAggregate } from './centre-count-aggregate.output';
import { CentreAvgAggregate } from './centre-avg-aggregate.output';
import { CentreSumAggregate } from './centre-sum-aggregate.output';
import { CentreMinAggregate } from './centre-min-aggregate.output';
import { CentreMaxAggregate } from './centre-max-aggregate.output';

@ObjectType()
export class CentreGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayText!: string;

    @Field(() => Int, {nullable:false})
    displaySequence!: number;

    @Field(() => String, {nullable:false})
    streetAddress!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    stateProvince!: string;

    @Field(() => String, {nullable:false})
    country!: string;

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

    @Field(() => CentreCountAggregate, {nullable:true})
    _count?: CentreCountAggregate;

    @Field(() => CentreAvgAggregate, {nullable:true})
    _avg?: CentreAvgAggregate;

    @Field(() => CentreSumAggregate, {nullable:true})
    _sum?: CentreSumAggregate;

    @Field(() => CentreMinAggregate, {nullable:true})
    _min?: CentreMinAggregate;

    @Field(() => CentreMaxAggregate, {nullable:true})
    _max?: CentreMaxAggregate;
}
