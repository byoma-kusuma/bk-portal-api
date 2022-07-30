import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';
import { Type } from 'class-transformer';
import { MemberOrderByWithRelationInput } from './member-order-by-with-relation.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberCountAggregateInput } from './member-count-aggregate.input';
import { MemberMinAggregateInput } from './member-min-aggregate.input';
import { MemberMaxAggregateInput } from './member-max-aggregate.input';

@ArgsType()
export class MemberAggregateArgs {

    @Field(() => MemberWhereInput, {nullable:true})
    @Type(() => MemberWhereInput)
    where?: MemberWhereInput;

    @Field(() => [MemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberOrderByWithRelationInput>;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    cursor?: MemberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemberCountAggregateInput, {nullable:true})
    _count?: MemberCountAggregateInput;

    @Field(() => MemberMinAggregateInput, {nullable:true})
    _min?: MemberMinAggregateInput;

    @Field(() => MemberMaxAggregateInput, {nullable:true})
    _max?: MemberMaxAggregateInput;
}
