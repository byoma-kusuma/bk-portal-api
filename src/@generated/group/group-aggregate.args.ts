import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';
import { GroupOrderByWithRelationInput } from './group-order-by-with-relation.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GroupCountAggregateInput } from './group-count-aggregate.input';
import { GroupAvgAggregateInput } from './group-avg-aggregate.input';
import { GroupSumAggregateInput } from './group-sum-aggregate.input';
import { GroupMinAggregateInput } from './group-min-aggregate.input';
import { GroupMaxAggregateInput } from './group-max-aggregate.input';

@ArgsType()
export class GroupAggregateArgs {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;

    @Field(() => [GroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GroupOrderByWithRelationInput>;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    cursor?: GroupWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GroupCountAggregateInput, {nullable:true})
    _count?: GroupCountAggregateInput;

    @Field(() => GroupAvgAggregateInput, {nullable:true})
    _avg?: GroupAvgAggregateInput;

    @Field(() => GroupSumAggregateInput, {nullable:true})
    _sum?: GroupSumAggregateInput;

    @Field(() => GroupMinAggregateInput, {nullable:true})
    _min?: GroupMinAggregateInput;

    @Field(() => GroupMaxAggregateInput, {nullable:true})
    _max?: GroupMaxAggregateInput;
}
