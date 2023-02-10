import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipType } from '../prisma/membership-type.enum';
import { Int } from '@nestjs/graphql';
import { GenderType } from '../prisma/gender-type.enum';
import { UserCreateNestedOneWithoutMemberInput } from '../user/user-create-nested-one-without-member.input';
import { MemberGroupCreateNestedManyWithoutMemberInput } from '../member-group/member-group-create-nested-many-without-member.input';
import { MemberAbhisekhaCreateNestedManyWithoutMemberInput } from '../member-abhisekha/member-abhisekha-create-nested-many-without-member.input';
import { MemberResourceCreateNestedManyWithoutMemberInput } from '../member-resource/member-resource-create-nested-many-without-member.input';
import { EventMemberCreateNestedManyWithoutMemberInput } from '../event-member/event-member-create-nested-many-without-member.input';
import { CentreCreateNestedOneWithoutMembersInput } from '../centre/centre-create-nested-one-without-members.input';
import { AddressCreateNestedOneWithoutMembersInput } from '../address/address-create-nested-one-without-members.input';
import { AddressCreateNestedOneWithoutMemberCurrentAddressInput } from '../address/address-create-nested-one-without-member-current-address.input';
import { AddressCreateNestedOneWithoutMemberPermanentAddressInput } from '../address/address-create-nested-one-without-member-permanent-address.input';

@InputType()
export class MemberCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutMemberInput, {nullable:true})
    user?: UserCreateNestedOneWithoutMemberInput;

    @Field(() => MemberGroupCreateNestedManyWithoutMemberInput, {nullable:true})
    memberGroup?: MemberGroupCreateNestedManyWithoutMemberInput;

    @Field(() => MemberAbhisekhaCreateNestedManyWithoutMemberInput, {nullable:true})
    memberAbhisekha?: MemberAbhisekhaCreateNestedManyWithoutMemberInput;

    @Field(() => MemberResourceCreateNestedManyWithoutMemberInput, {nullable:true})
    memberResource?: MemberResourceCreateNestedManyWithoutMemberInput;

    @Field(() => EventMemberCreateNestedManyWithoutMemberInput, {nullable:true})
    eventMember?: EventMemberCreateNestedManyWithoutMemberInput;

    @Field(() => CentreCreateNestedOneWithoutMembersInput, {nullable:true})
    centre?: CentreCreateNestedOneWithoutMembersInput;

    @Field(() => AddressCreateNestedOneWithoutMembersInput, {nullable:true})
    address?: AddressCreateNestedOneWithoutMembersInput;

    @Field(() => AddressCreateNestedOneWithoutMemberCurrentAddressInput, {nullable:true})
    currentAddress?: AddressCreateNestedOneWithoutMemberCurrentAddressInput;

    @Field(() => AddressCreateNestedOneWithoutMemberPermanentAddressInput, {nullable:true})
    permanentAddress?: AddressCreateNestedOneWithoutMemberPermanentAddressInput;
}
