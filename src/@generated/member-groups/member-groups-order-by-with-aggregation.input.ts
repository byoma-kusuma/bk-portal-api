import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberGroupsCountOrderByAggregateInput } from './member-groups-count-order-by-aggregate.input';
import { MemberGroupsAvgOrderByAggregateInput } from './member-groups-avg-order-by-aggregate.input';
import { MemberGroupsMaxOrderByAggregateInput } from './member-groups-max-order-by-aggregate.input';
import { MemberGroupsMinOrderByAggregateInput } from './member-groups-min-order-by-aggregate.input';
import { MemberGroupsSumOrderByAggregateInput } from './member-groups-sum-order-by-aggregate.input';

@InputType()
export class MemberGroupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    memberId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => MemberGroupsCountOrderByAggregateInput, {nullable:true})
    _count?: MemberGroupsCountOrderByAggregateInput;

    @Field(() => MemberGroupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MemberGroupsAvgOrderByAggregateInput;

    @Field(() => MemberGroupsMaxOrderByAggregateInput, {nullable:true})
    _max?: MemberGroupsMaxOrderByAggregateInput;

    @Field(() => MemberGroupsMinOrderByAggregateInput, {nullable:true})
    _min?: MemberGroupsMinOrderByAggregateInput;

    @Field(() => MemberGroupsSumOrderByAggregateInput, {nullable:true})
    _sum?: MemberGroupsSumOrderByAggregateInput;
}
