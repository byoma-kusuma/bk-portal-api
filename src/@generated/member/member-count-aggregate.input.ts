import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    middleName?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    isMember?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    phonePrimary?: true;

    @Field(() => Boolean, {nullable:true})
    phoneSecondary?: true;

    @Field(() => Boolean, {nullable:true})
    centerAffiliation?: true;

    @Field(() => Boolean, {nullable:true})
    membershipType?: true;

    @Field(() => Boolean, {nullable:true})
    permanentAddress?: true;

    @Field(() => Boolean, {nullable:true})
    currentAddress?: true;

    @Field(() => Boolean, {nullable:true})
    dob?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    sanghaJoinDate?: true;

    @Field(() => Boolean, {nullable:true})
    refugeName?: true;

    @Field(() => Boolean, {nullable:true})
    viber?: true;

    @Field(() => Boolean, {nullable:true})
    messenger?: true;

    @Field(() => Boolean, {nullable:true})
    insta?: true;

    @Field(() => Boolean, {nullable:true})
    photo?: true;

    @Field(() => Boolean, {nullable:true})
    centreId?: true;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    uniqueKey?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
