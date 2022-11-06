import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';
import { Type } from 'class-transformer';
import { MemberOrderByWithAggregationInput } from './member-order-by-with-aggregation.input';
import { MemberScalarFieldEnum } from './member-scalar-field.enum';
import { MemberScalarWhereWithAggregatesInput } from './member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MemberCountAggregateInput } from './member-count-aggregate.input';
import { MemberAvgAggregateInput } from './member-avg-aggregate.input';
import { MemberSumAggregateInput } from './member-sum-aggregate.input';
import { MemberMinAggregateInput } from './member-min-aggregate.input';
import { MemberMaxAggregateInput } from './member-max-aggregate.input';

@ArgsType()
export class MemberGroupByArgs {

    @Field(() => MemberWhereInput, {nullable:true})
    @Type(() => MemberWhereInput)
    where?: MemberWhereInput;

    @Field(() => [MemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MemberOrderByWithAggregationInput>;

    @Field(() => [MemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MemberScalarFieldEnum>;

    @Field(() => MemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: MemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemberCountAggregateInput, {nullable:true})
    _count?: MemberCountAggregateInput;

    @Field(() => MemberAvgAggregateInput, {nullable:true})
    _avg?: MemberAvgAggregateInput;

    @Field(() => MemberSumAggregateInput, {nullable:true})
    _sum?: MemberSumAggregateInput;

    @Field(() => MemberMinAggregateInput, {nullable:true})
    _min?: MemberMinAggregateInput;

    @Field(() => MemberMaxAggregateInput, {nullable:true})
    _max?: MemberMaxAggregateInput;
}
