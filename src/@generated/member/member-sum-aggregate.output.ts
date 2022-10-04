import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberSumAggregate {

    @Field(() => Int, {nullable:true})
    centreId?: number;
}
