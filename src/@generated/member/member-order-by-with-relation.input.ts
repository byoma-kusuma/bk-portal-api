import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CentreOrderByWithRelationInput } from '../centre/centre-order-by-with-relation.input';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { MemberGroupOrderByRelationAggregateInput } from '../member-group/member-group-order-by-relation-aggregate.input';
import { MemberAbhisekhaOrderByRelationAggregateInput } from '../member-abhisekha/member-abhisekha-order-by-relation-aggregate.input';
import { EventMemberOrderByRelationAggregateInput } from '../event-member/event-member-order-by-relation-aggregate.input';

@InputType()
export class MemberOrderByWithRelationInput {

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
    phoneMobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneLand?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneOther?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    membershipType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearOfBirth?: keyof typeof SortOrder;

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
    note?: keyof typeof SortOrder;

    @Field(() => CentreOrderByWithRelationInput, {nullable:true})
    centre?: CentreOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    centreId?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    address?: AddressOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    addressid?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    currentAddress?: AddressOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    currentAddressId?: keyof typeof SortOrder;

    @Field(() => AddressOrderByWithRelationInput, {nullable:true})
    permanentAddress?: AddressOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    permanentAddressId?: keyof typeof SortOrder;

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => MemberGroupOrderByRelationAggregateInput, {nullable:true})
    memberGroup?: MemberGroupOrderByRelationAggregateInput;

    @Field(() => MemberAbhisekhaOrderByRelationAggregateInput, {nullable:true})
    memberAbhisekha?: MemberAbhisekhaOrderByRelationAggregateInput;

    @Field(() => EventMemberOrderByRelationAggregateInput, {nullable:true})
    EventMember?: EventMemberOrderByRelationAggregateInput;
}
