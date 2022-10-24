import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CentreAffiliationType } from '../prisma/centre-affiliation-type.enum';
import { MembershipType } from '../prisma/membership-type.enum';
import { GenderType } from '../prisma/gender-type.enum';
import { Centre } from '../centre/centre.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Member {

    @Field(() => ID, {nullable:false})
    id!: string;

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
    phonePrimary!: string | null;

    @Field(() => String, {nullable:true})
    phoneSecondary!: string | null;

    @Field(() => CentreAffiliationType, {nullable:false})
    centerAffiliation!: keyof typeof CentreAffiliationType;

    @Field(() => MembershipType, {nullable:true})
    membershipType!: keyof typeof MembershipType | null;

    @Field(() => String, {nullable:true})
    permanentAddress!: string | null;

    @Field(() => String, {nullable:true})
    currentAddress!: string | null;

    @Field(() => Date, {nullable:true})
    dob!: Date | null;

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

    @Field(() => Centre, {nullable:true})
    centre?: Centre | null;

    @Field(() => Int, {nullable:true})
    centreId!: number | null;

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
}
