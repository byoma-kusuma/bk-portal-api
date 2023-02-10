import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberCount {

    @Field(() => Int, {nullable:false})
    memberGroup?: number;

    @Field(() => Int, {nullable:false})
    memberAbhisekha?: number;

    @Field(() => Int, {nullable:false})
    memberResource?: number;

    @Field(() => Int, {nullable:false})
    eventMember?: number;
}
