import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereInput } from './centre-where.input';
import { Type } from 'class-transformer';
import { CentreOrderByWithRelationInput } from './centre-order-by-with-relation.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CentreCountAggregateInput } from './centre-count-aggregate.input';
import { CentreAvgAggregateInput } from './centre-avg-aggregate.input';
import { CentreSumAggregateInput } from './centre-sum-aggregate.input';
import { CentreMinAggregateInput } from './centre-min-aggregate.input';
import { CentreMaxAggregateInput } from './centre-max-aggregate.input';

@ArgsType()
export class CentreAggregateArgs {

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;

    @Field(() => [CentreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CentreOrderByWithRelationInput>;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    cursor?: CentreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CentreCountAggregateInput, {nullable:true})
    _count?: CentreCountAggregateInput;

    @Field(() => CentreAvgAggregateInput, {nullable:true})
    _avg?: CentreAvgAggregateInput;

    @Field(() => CentreSumAggregateInput, {nullable:true})
    _sum?: CentreSumAggregateInput;

    @Field(() => CentreMinAggregateInput, {nullable:true})
    _min?: CentreMinAggregateInput;

    @Field(() => CentreMaxAggregateInput, {nullable:true})
    _max?: CentreMaxAggregateInput;
}
