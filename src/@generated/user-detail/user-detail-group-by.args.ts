import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereInput } from './user-detail-where.input';
import { Type } from 'class-transformer';
import { UserDetailOrderByWithAggregationInput } from './user-detail-order-by-with-aggregation.input';
import { UserDetailScalarFieldEnum } from './user-detail-scalar-field.enum';
import { UserDetailScalarWhereWithAggregatesInput } from './user-detail-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserDetailCountAggregateInput } from './user-detail-count-aggregate.input';
import { UserDetailMinAggregateInput } from './user-detail-min-aggregate.input';
import { UserDetailMaxAggregateInput } from './user-detail-max-aggregate.input';

@ArgsType()
export class UserDetailGroupByArgs {

    @Field(() => UserDetailWhereInput, {nullable:true})
    @Type(() => UserDetailWhereInput)
    where?: UserDetailWhereInput;

    @Field(() => [UserDetailOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserDetailOrderByWithAggregationInput>;

    @Field(() => [UserDetailScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserDetailScalarFieldEnum>;

    @Field(() => UserDetailScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserDetailScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserDetailCountAggregateInput, {nullable:true})
    _count?: UserDetailCountAggregateInput;

    @Field(() => UserDetailMinAggregateInput, {nullable:true})
    _min?: UserDetailMinAggregateInput;

    @Field(() => UserDetailMaxAggregateInput, {nullable:true})
    _max?: UserDetailMaxAggregateInput;
}
