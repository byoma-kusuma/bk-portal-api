import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    yearOfBirth?: number;

    @Field(() => Int, {nullable:true})
    centreId?: number;

    @Field(() => Int, {nullable:true})
    addressid?: number;

    @Field(() => Int, {nullable:true})
    currentAddressId?: number;

    @Field(() => Int, {nullable:true})
    permanentAddressId?: number;
}
