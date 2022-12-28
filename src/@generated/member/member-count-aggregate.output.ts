import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    middleName!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    isMember!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    phoneMobile!: number;

    @Field(() => Int, {nullable:false})
    phoneLand!: number;

    @Field(() => Int, {nullable:false})
    phoneOther!: number;

    @Field(() => Int, {nullable:false})
    membershipType!: number;

    @Field(() => Int, {nullable:false})
    yearOfBirth!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    sanghaJoinDate!: number;

    @Field(() => Int, {nullable:false})
    refugeName!: number;

    @Field(() => Int, {nullable:false})
    viber!: number;

    @Field(() => Int, {nullable:false})
    messenger!: number;

    @Field(() => Int, {nullable:false})
    insta!: number;

    @Field(() => Int, {nullable:false})
    photo!: number;

    @Field(() => Int, {nullable:false})
    note!: number;

    @Field(() => Int, {nullable:false})
    isDeleted!: number;

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
    centreId!: number;

    @Field(() => Int, {nullable:false})
    addressid!: number;

    @Field(() => Int, {nullable:false})
    currentAddressId!: number;

    @Field(() => Int, {nullable:false})
    permanentAddressId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
