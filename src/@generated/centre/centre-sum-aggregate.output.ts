import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CentreSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    displaySequence?: number;
}
