import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipType } from '../prisma/membership-type.enum';
import { Int } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { UserUpdateOneWithoutMemberInput } from '../user/user-update-one-without-member.input';
import { MemberGroupUpdateManyWithoutMemberInput } from '../member-group/member-group-update-many-without-member.input';
import { MemberAbhisekhaUpdateManyWithoutMemberInput } from '../member-abhisekha/member-abhisekha-update-many-without-member.input';
import { MemberResourceUpdateManyWithoutMemberInput } from '../member-resource/member-resource-update-many-without-member.input';
import { EventMemberUpdateManyWithoutMemberInput } from '../event-member/event-member-update-many-without-member.input';
import { CentreUpdateOneWithoutMembersInput } from '../centre/centre-update-one-without-members.input';
import { AddressUpdateOneWithoutMembersInput } from '../address/address-update-one-without-members.input';
import { AddressUpdateOneWithoutMemberCurrentAddressInput } from '../address/address-update-one-without-member-current-address.input';
import { AddressUpdateOneWithoutMemberPermanentAddressInput } from '../address/address-update-one-without-member-permanent-address.input';

@InputType()
export class MemberUpdateInput {

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

    @Field(() => UserUpdateOneWithoutMemberInput, {nullable:true})
    user?: UserUpdateOneWithoutMemberInput;

    @Field(() => MemberGroupUpdateManyWithoutMemberInput, {nullable:true})
    memberGroup?: MemberGroupUpdateManyWithoutMemberInput;

    @Field(() => MemberAbhisekhaUpdateManyWithoutMemberInput, {nullable:true})
    memberAbhisekha?: MemberAbhisekhaUpdateManyWithoutMemberInput;

    @Field(() => MemberResourceUpdateManyWithoutMemberInput, {nullable:true})
    memberResource?: MemberResourceUpdateManyWithoutMemberInput;

    @Field(() => EventMemberUpdateManyWithoutMemberInput, {nullable:true})
    eventMember?: EventMemberUpdateManyWithoutMemberInput;

    @Field(() => CentreUpdateOneWithoutMembersInput, {nullable:true})
    centre?: CentreUpdateOneWithoutMembersInput;

    @Field(() => AddressUpdateOneWithoutMembersInput, {nullable:true})
    address?: AddressUpdateOneWithoutMembersInput;

    @Field(() => AddressUpdateOneWithoutMemberCurrentAddressInput, {nullable:true})
    currentAddress?: AddressUpdateOneWithoutMemberCurrentAddressInput;

    @Field(() => AddressUpdateOneWithoutMemberPermanentAddressInput, {nullable:true})
    permanentAddress?: AddressUpdateOneWithoutMemberPermanentAddressInput;
}
