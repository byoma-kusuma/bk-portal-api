import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereInput } from './password-token-where.input';
import { Type } from 'class-transformer';
import { PasswordTokenOrderByWithRelationInput } from './password-token-order-by-with-relation.input';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordTokenCountAggregateInput } from './password-token-count-aggregate.input';
import { PasswordTokenAvgAggregateInput } from './password-token-avg-aggregate.input';
import { PasswordTokenSumAggregateInput } from './password-token-sum-aggregate.input';
import { PasswordTokenMinAggregateInput } from './password-token-min-aggregate.input';
import { PasswordTokenMaxAggregateInput } from './password-token-max-aggregate.input';

@ArgsType()
export class PasswordTokenAggregateArgs {

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    @Type(() => PasswordTokenWhereInput)
    where?: PasswordTokenWhereInput;

    @Field(() => [PasswordTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordTokenOrderByWithRelationInput>;

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:true})
    cursor?: PasswordTokenWhereUniqueInput;

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
