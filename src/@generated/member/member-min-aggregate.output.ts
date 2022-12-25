import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipType } from '../prisma/membership-type.enum';
import { GenderType } from '../prisma/gender-type.enum';

@ObjectType()
export class MemberMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Boolean, {nullable:true})
    isMember?: boolean;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    phoneMobile?: string;

    @Field(() => String, {nullable:true})
    phoneLand?: string;

    @Field(() => String, {nullable:true})
    phoneOther?: string;

    @Field(() => MembershipType, {nullable:true})
    membershipType?: keyof typeof MembershipType;

    @Field(() => Int, {nullable:true})
    yearOfBirth?: number;

    @Field(() => GenderType, {nullable:true})
    gender?: keyof typeof GenderType;

    @Field(() => Date, {nullable:true})
    sanghaJoinDate?: Date | string;

    @Field(() => String, {nullable:true})
    refugeName?: string;

    @Field(() => String, {nullable:true})
    viber?: string;

    @Field(() => String, {nullable:true})
    messenger?: string;

    @Field(() => String, {nullable:true})
    insta?: string;

    @Field(() => String, {nullable:true})
    photo?: string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => Int, {nullable:true})
    centreId?: number;

    @Field(() => Int, {nullable:true})
    addressid?: number;

    @Field(() => Int, {nullable:true})
    currentAddressId?: number;

    @Field(() => Int, {nullable:true})
    permanentAddressId?: number;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    createdBy?: string;
}
