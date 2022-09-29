import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereInput } from './password-token-where.input';
import { Type } from 'class-transformer';
import { PasswordTokenOrderByWithAggregationInput } from './password-token-order-by-with-aggregation.input';
import { PasswordTokenScalarFieldEnum } from './password-token-scalar-field.enum';
import { PasswordTokenScalarWhereWithAggregatesInput } from './password-token-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PasswordTokenCountAggregateInput } from './password-token-count-aggregate.input';
import { PasswordTokenAvgAggregateInput } from './password-token-avg-aggregate.input';
import { PasswordTokenSumAggregateInput } from './password-token-sum-aggregate.input';
import { PasswordTokenMinAggregateInput } from './password-token-min-aggregate.input';
import { PasswordTokenMaxAggregateInput } from './password-token-max-aggregate.input';

@ArgsType()
export class PasswordTokenGroupByArgs {

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    @Type(() => PasswordTokenWhereInput)
    where?: PasswordTokenWhereInput;

    @Field(() => [PasswordTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PasswordTokenOrderByWithAggregationInput>;

    @Field(() => [PasswordTokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PasswordTokenScalarFieldEnum>;

    @Field(() => PasswordTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: PasswordTokenScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PasswordTokenCountAggregateInput, {nullable:true})
    _count?: PasswordTokenCountAggregateInput;

    @Field(() => PasswordTokenAvgAggregateInput, {nullable:true})
    _avg?: PasswordTokenAvgAggregateInput;

    @Field(() => PasswordTokenSumAggregateInput, {nullable:true})
    _sum?: PasswordTokenSumAggregateInput;

    @Field(() => PasswordTokenMinAggregateInput, {nullable:true})
    _min?: PasswordTokenMinAggregateInput;

    @Field(() => PasswordTokenMaxAggregateInput, {nullable:true})
    _max?: PasswordTokenMaxAggregateInput;
}
