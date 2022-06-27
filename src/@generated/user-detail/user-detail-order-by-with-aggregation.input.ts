import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserDetailCountOrderByAggregateInput } from './user-detail-count-order-by-aggregate.input';
import { UserDetailMaxOrderByAggregateInput } from './user-detail-max-order-by-aggregate.input';
import { UserDetailMinOrderByAggregateInput } from './user-detail-min-order-by-aggregate.input';

@InputType()
export class UserDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    steetAddress2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    secondaryEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

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

    @Field(() => UserDetailCountOrderByAggregateInput, {nullable:true})
    _count?: UserDetailCountOrderByAggregateInput;

    @Field(() => UserDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: UserDetailMaxOrderByAggregateInput;

    @Field(() => UserDetailMinOrderByAggregateInput, {nullable:true})
    _min?: UserDetailMinOrderByAggregateInput;
}
