import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CentreCountAggregate } from './centre-count-aggregate.output';
import { CentreAvgAggregate } from './centre-avg-aggregate.output';
import { CentreSumAggregate } from './centre-sum-aggregate.output';
import { CentreMinAggregate } from './centre-min-aggregate.output';
import { CentreMaxAggregate } from './centre-max-aggregate.output';

@ObjectType()
export class AggregateCentre {

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
