import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereInput } from './password-history-where.input';
import { Type } from 'class-transformer';
import { PasswordHistoryOrderByWithAggregationInput } from './password-history-order-by-with-aggregation.input';
import { PasswordHistoryScalarFieldEnum } from './password-history-scalar-field.enum';
import { PasswordHistoryScalarWhereWithAggregatesInput } from './password-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PasswordHistoryCountAggregateInput } from './password-history-count-aggregate.input';
import { PasswordHistoryMinAggregateInput } from './password-history-min-aggregate.input';
import { PasswordHistoryMaxAggregateInput } from './password-history-max-aggregate.input';

@ArgsType()
export class PasswordHistoryGroupByArgs {

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    @Type(() => PasswordHistoryWhereInput)
    where?: PasswordHistoryWhereInput;

    @Field(() => [PasswordHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PasswordHistoryOrderByWithAggregationInput>;

    @Field(() => [PasswordHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PasswordHistoryScalarFieldEnum>;

    @Field(() => PasswordHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: PasswordHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PasswordHistoryCountAggregateInput, {nullable:true})
    _count?: PasswordHistoryCountAggregateInput;

    @Field(() => PasswordHistoryMinAggregateInput, {nullable:true})
    _min?: PasswordHistoryMinAggregateInput;

    @Field(() => PasswordHistoryMaxAggregateInput, {nullable:true})
    _max?: PasswordHistoryMaxAggregateInput;
}
