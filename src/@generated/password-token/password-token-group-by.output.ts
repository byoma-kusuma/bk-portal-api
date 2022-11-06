import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PasswordTokenCountAggregate } from './password-token-count-aggregate.output';
import { PasswordTokenAvgAggregate } from './password-token-avg-aggregate.output';
import { PasswordTokenSumAggregate } from './password-token-sum-aggregate.output';
import { PasswordTokenMinAggregate } from './password-token-min-aggregate.output';
import { PasswordTokenMaxAggregate } from './password-token-max-aggregate.output';

@ObjectType()
export class PasswordTokenGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => PasswordTokenCountAggregate, {nullable:true})
    _count?: PasswordTokenCountAggregate;

    @Field(() => PasswordTokenAvgAggregate, {nullable:true})
    _avg?: PasswordTokenAvgAggregate;

    @Field(() => PasswordTokenSumAggregate, {nullable:true})
    _sum?: PasswordTokenSumAggregate;

    @Field(() => PasswordTokenMinAggregate, {nullable:true})
    _min?: PasswordTokenMinAggregate;

    @Field(() => PasswordTokenMaxAggregate, {nullable:true})
    _max?: PasswordTokenMaxAggregate;
}
