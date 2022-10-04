import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CentreCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    displayText!: number;

    @Field(() => Int, {nullable:false})
    displaySequence!: number;

    @Field(() => Int, {nullable:false})
    streetAddress!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    stateProvince!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    uniqueKey!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    createdBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
