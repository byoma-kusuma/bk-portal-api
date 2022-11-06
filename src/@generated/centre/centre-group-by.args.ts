import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereInput } from './centre-where.input';
import { Type } from 'class-transformer';
import { CentreOrderByWithAggregationInput } from './centre-order-by-with-aggregation.input';
import { CentreScalarFieldEnum } from './centre-scalar-field.enum';
import { CentreScalarWhereWithAggregatesInput } from './centre-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CentreCountAggregateInput } from './centre-count-aggregate.input';
import { CentreAvgAggregateInput } from './centre-avg-aggregate.input';
import { CentreSumAggregateInput } from './centre-sum-aggregate.input';
import { CentreMinAggregateInput } from './centre-min-aggregate.input';
import { CentreMaxAggregateInput } from './centre-max-aggregate.input';

@ArgsType()
export class CentreGroupByArgs {

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;

    @Field(() => [CentreOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CentreOrderByWithAggregationInput>;

    @Field(() => [CentreScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CentreScalarFieldEnum>;

    @Field(() => CentreScalarWhereWithAggregatesInput, {nullable:true})
    having?: CentreScalarWhereWithAggregatesInput;

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
