import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PasswordHistoryCountOrderByAggregateInput } from './password-history-count-order-by-aggregate.input';
import { PasswordHistoryMaxOrderByAggregateInput } from './password-history-max-order-by-aggregate.input';
import { PasswordHistoryMinOrderByAggregateInput } from './password-history-min-order-by-aggregate.input';

@InputType()
export class PasswordHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => PasswordHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: PasswordHistoryCountOrderByAggregateInput;

    @Field(() => PasswordHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: PasswordHistoryMaxOrderByAggregateInput;

    @Field(() => PasswordHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: PasswordHistoryMinOrderByAggregateInput;
}
