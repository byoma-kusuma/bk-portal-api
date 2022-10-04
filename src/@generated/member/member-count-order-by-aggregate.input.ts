import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MemberCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    middleName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isMember?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phonePrimary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneSecondary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    centerAffiliation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    membershipType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permanentAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dob?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sanghaJoinDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refugeName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messenger?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    insta?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    centreId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;
}
