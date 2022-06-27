import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereInput } from './password-history-where.input';
import { Type } from 'class-transformer';
import { PasswordHistoryOrderByWithRelationInput } from './password-history-order-by-with-relation.input';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordHistoryCountAggregateInput } from './password-history-count-aggregate.input';
import { PasswordHistoryMinAggregateInput } from './password-history-min-aggregate.input';
import { PasswordHistoryMaxAggregateInput } from './password-history-max-aggregate.input';

@ArgsType()
export class PasswordHistoryAggregateArgs {

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    @Type(() => PasswordHistoryWhereInput)
    where?: PasswordHistoryWhereInput;

    @Field(() => [PasswordHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordHistoryOrderByWithRelationInput>;

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:true})
    cursor?: PasswordHistoryWhereUniqueInput;

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
