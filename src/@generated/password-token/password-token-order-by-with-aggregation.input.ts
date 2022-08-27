import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PasswordTokenCountOrderByAggregateInput } from './password-token-count-order-by-aggregate.input';
import { PasswordTokenMaxOrderByAggregateInput } from './password-token-max-order-by-aggregate.input';
import { PasswordTokenMinOrderByAggregateInput } from './password-token-min-order-by-aggregate.input';

@InputType()
export class PasswordTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => PasswordTokenCountOrderByAggregateInput, {nullable:true})
    _count?: PasswordTokenCountOrderByAggregateInput;

    @Field(() => PasswordTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: PasswordTokenMaxOrderByAggregateInput;

    @Field(() => PasswordTokenMinOrderByAggregateInput, {nullable:true})
    _min?: PasswordTokenMinOrderByAggregateInput;
}
