import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberGroupsCountAggregate {

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    createdBy!: number;

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
