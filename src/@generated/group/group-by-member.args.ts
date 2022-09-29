import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from '../member/member-where.input';
import { Type } from 'class-transformer';
import { MemberOrderByWithAggregationInput } from '../member/member-order-by-with-aggregation.input';
import { MemberScalarFieldEnum } from '../member/member-scalar-field.enum';
import { MemberScalarWhereWithAggregatesInput } from '../member/member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByMemberArgs {

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
}
