import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MemberAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    yearOfBirth?: number;

    @Field(() => Float, {nullable:true})
    centreId?: number;

    @Field(() => Float, {nullable:true})
    currentAddressId?: number;

    @Field(() => Float, {nullable:true})
    permanentAddressId?: number;
}
