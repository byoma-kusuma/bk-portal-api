import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsWhereInput } from './member-groups-where.input';
import { Type } from 'class-transformer';
import { MemberGroupsOrderByWithRelationInput } from './member-groups-order-by-with-relation.input';
import { MemberGroupsWhereUniqueInput } from './member-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberGroupsCountAggregateInput } from './member-groups-count-aggregate.input';
import { MemberGroupsAvgAggregateInput } from './member-groups-avg-aggregate.input';
import { MemberGroupsSumAggregateInput } from './member-groups-sum-aggregate.input';
import { MemberGroupsMinAggregateInput } from './member-groups-min-aggregate.input';
import { MemberGroupsMaxAggregateInput } from './member-groups-max-aggregate.input';

@ArgsType()
export class MemberGroupsAggregateArgs {

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    @Type(() => MemberGroupsWhereInput)
    where?: MemberGroupsWhereInput;

    @Field(() => [MemberGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberGroupsOrderByWithRelationInput>;

    @Field(() => MemberGroupsWhereUniqueInput, {nullable:true})
    cursor?: MemberGroupsWhereUniqueInput;

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
