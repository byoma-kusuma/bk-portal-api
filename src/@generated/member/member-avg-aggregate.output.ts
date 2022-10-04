import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MemberAvgAggregate {

    @Field(() => Float, {nullable:true})
    centreId?: number;
}
