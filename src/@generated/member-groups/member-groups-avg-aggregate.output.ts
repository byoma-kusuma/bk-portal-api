import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MemberGroupsAvgAggregate {

    @Field(() => Float, {nullable:true})
    memberId?: number;

    @Field(() => Float, {nullable:true})
    groupId?: number;
}
