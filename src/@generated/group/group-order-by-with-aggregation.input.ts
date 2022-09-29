import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupCountOrderByAggregateInput } from './group-count-order-by-aggregate.input';
import { GroupAvgOrderByAggregateInput } from './group-avg-order-by-aggregate.input';
import { GroupMaxOrderByAggregateInput } from './group-max-order-by-aggregate.input';
import { GroupMinOrderByAggregateInput } from './group-min-order-by-aggregate.input';
import { GroupSumOrderByAggregateInput } from './group-sum-order-by-aggregate.input';

@InputType()
export class GroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visible?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => GroupCountOrderByAggregateInput, {nullable:true})
    _count?: GroupCountOrderByAggregateInput;

    @Field(() => GroupAvgOrderByAggregateInput, {nullable:true})
    _avg?: GroupAvgOrderByAggregateInput;

    @Field(() => GroupMaxOrderByAggregateInput, {nullable:true})
    _max?: GroupMaxOrderByAggregateInput;

    @Field(() => GroupMinOrderByAggregateInput, {nullable:true})
    _min?: GroupMinOrderByAggregateInput;

    @Field(() => GroupSumOrderByAggregateInput, {nullable:true})
    _sum?: GroupSumOrderByAggregateInput;
}
