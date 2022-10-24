import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CentreAffiliationType } from '../prisma/centre-affiliation-type.enum';
import { MembershipType } from '../prisma/membership-type.enum';
import { GenderType } from '../prisma/gender-type.enum';
import { Int } from '@nestjs/graphql';
import { MemberCountAggregate } from './member-count-aggregate.output';
import { MemberAvgAggregate } from './member-avg-aggregate.output';
import { MemberSumAggregate } from './member-sum-aggregate.output';
import { MemberMinAggregate } from './member-min-aggregate.output';
import { MemberMaxAggregate } from './member-max-aggregate.output';

@ObjectType()
export class MemberGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Boolean, {nullable:false})
    isMember!: boolean;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    phonePrimary?: string;

    @Field(() => String, {nullable:true})
    phoneSecondary?: string;

    @Field(() => CentreAffiliationType, {nullable:false})
    centerAffiliation!: keyof typeof CentreAffiliationType;

    @Field(() => MembershipType, {nullable:true})
    membershipType?: keyof typeof MembershipType;

    @Field(() => String, {nullable:true})
    permanentAddress?: string;

    @Field(() => String, {nullable:true})
    currentAddress?: string;

    @Field(() => Date, {nullable:true})
    dob?: Date | string;

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

    @Field(() => Int, {nullable:true})
    centreId?: number;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => MemberCountAggregate, {nullable:true})
    _count?: MemberCountAggregate;

    @Field(() => MemberAvgAggregate, {nullable:true})
    _avg?: MemberAvgAggregate;

    @Field(() => MemberSumAggregate, {nullable:true})
    _sum?: MemberSumAggregate;

    @Field(() => MemberMinAggregate, {nullable:true})
    _min?: MemberMinAggregate;

    @Field(() => MemberMaxAggregate, {nullable:true})
    _max?: MemberMaxAggregate;
}
