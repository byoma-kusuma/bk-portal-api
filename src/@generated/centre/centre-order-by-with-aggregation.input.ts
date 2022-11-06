import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CentreCountOrderByAggregateInput } from './centre-count-order-by-aggregate.input';
import { CentreAvgOrderByAggregateInput } from './centre-avg-order-by-aggregate.input';
import { CentreMaxOrderByAggregateInput } from './centre-max-order-by-aggregate.input';
import { CentreMinOrderByAggregateInput } from './centre-min-order-by-aggregate.input';
import { CentreSumOrderByAggregateInput } from './centre-sum-order-by-aggregate.input';

@InputType()
export class CentreOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displaySequence?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateProvince?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => CentreCountOrderByAggregateInput, {nullable:true})
    _count?: CentreCountOrderByAggregateInput;

    @Field(() => CentreAvgOrderByAggregateInput, {nullable:true})
    _avg?: CentreAvgOrderByAggregateInput;

    @Field(() => CentreMaxOrderByAggregateInput, {nullable:true})
    _max?: CentreMaxOrderByAggregateInput;

    @Field(() => CentreMinOrderByAggregateInput, {nullable:true})
    _min?: CentreMinOrderByAggregateInput;

    @Field(() => CentreSumOrderByAggregateInput, {nullable:true})
    _sum?: CentreSumOrderByAggregateInput;
}
