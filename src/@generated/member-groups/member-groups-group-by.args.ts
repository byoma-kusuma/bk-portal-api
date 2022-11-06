import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsWhereInput } from './member-groups-where.input';
import { Type } from 'class-transformer';
import { MemberGroupsOrderByWithAggregationInput } from './member-groups-order-by-with-aggregation.input';
import { MemberGroupsScalarFieldEnum } from './member-groups-scalar-field.enum';
import { MemberGroupsScalarWhereWithAggregatesInput } from './member-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MemberGroupsCountAggregateInput } from './member-groups-count-aggregate.input';
import { MemberGroupsAvgAggregateInput } from './member-groups-avg-aggregate.input';
import { MemberGroupsSumAggregateInput } from './member-groups-sum-aggregate.input';
import { MemberGroupsMinAggregateInput } from './member-groups-min-aggregate.input';
import { MemberGroupsMaxAggregateInput } from './member-groups-max-aggregate.input';

@ArgsType()
export class MemberGroupsGroupByArgs {

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    @Type(() => MemberGroupsWhereInput)
    where?: MemberGroupsWhereInput;

    @Field(() => [MemberGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MemberGroupsOrderByWithAggregationInput>;

    @Field(() => [MemberGroupsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MemberGroupsScalarFieldEnum>;

    @Field(() => MemberGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: MemberGroupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemberGroupsCountAggregateInput, {nullable:true})
    _count?: MemberGroupsCountAggregateInput;

    @Field(() => MemberGroupsAvgAggregateInput, {nullable:true})
    _avg?: MemberGroupsAvgAggregateInput;

    @Field(() => MemberGroupsSumAggregateInput, {nullable:true})
    _sum?: MemberGroupsSumAggregateInput;

    @Field(() => MemberGroupsMinAggregateInput, {nullable:true})
    _min?: MemberGroupsMinAggregateInput;

    @Field(() => MemberGroupsMaxAggregateInput, {nullable:true})
    _max?: MemberGroupsMaxAggregateInput;
}
