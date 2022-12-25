import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MembershipType } from '../prisma/membership-type.enum';
import { Int } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { Centre } from '../centre/centre.model';
import { Address } from '../address/address.model';
import { User } from '../user/user.model';
import { MemberGroup } from '../member-group/member-group.model';
import { MemberAbhisekha } from '../member-abhisekha/member-abhisekha.model';
import { EventMember } from '../event-member/event-member.model';
import { MemberCount } from './member-count.output';

@ObjectType()
export class Member {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    middleName!: string | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isMember!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => String, {nullable:true})
    phoneMobile!: string | null;

    @Field(() => String, {nullable:true})
    phoneLand!: string | null;

    @Field(() => String, {nullable:true})
    phoneOther!: string | null;

    @Field(() => MembershipType, {nullable:true})
    membershipType!: keyof typeof MembershipType | null;

    @Field(() => Int, {nullable:true})
    yearOfBirth!: number | null;

    @Field(() => GenderType, {nullable:true})
    gender!: keyof typeof GenderType | null;

    @Field(() => Date, {nullable:true})
    sanghaJoinDate!: Date | null;

    @Field(() => String, {nullable:true})
    refugeName!: string | null;

    @Field(() => String, {nullable:true})
    viber!: string | null;

    @Field(() => String, {nullable:true})
    messenger!: string | null;

    @Field(() => String, {nullable:true})
    insta!: string | null;

    @Field(() => String, {nullable:true})
    photo!: string | null;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => Centre, {nullable:true})
    centre?: Centre | null;

    @Field(() => Int, {nullable:true})
    centreId!: number | null;

    @Field(() => Address, {nullable:true})
    address?: Address | null;

    @Field(() => Int, {nullable:true})
    addressid!: number | null;

    @Field(() => Address, {nullable:true})
    currentAddress?: Address | null;

    @Field(() => Int, {nullable:true})
    currentAddressId!: number | null;

    @Field(() => Address, {nullable:true})
    permanentAddress?: Address | null;

    @Field(() => Int, {nullable:true})
    permanentAddressId!: number | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    uniqueKey!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [MemberGroup], {nullable:true})
    memberGroup?: Array<MemberGroup>;

    @Field(() => [MemberAbhisekha], {nullable:true})
    MemberAbhisekha?: Array<MemberAbhisekha>;

    @Field(() => [EventMember], {nullable:true})
    EventMember?: Array<EventMember>;

    @Field(() => MemberCount, {nullable:false})
    _count?: MemberCount;
}
