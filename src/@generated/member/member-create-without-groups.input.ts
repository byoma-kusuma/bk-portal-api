import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreAffiliationType } from '../prisma/centre-affiliation-type.enum';
import { MembershipType } from '../prisma/membership-type.enum';
import { GenderType } from '../prisma/gender-type.enum';
import { CentreCreateNestedOneWithoutMembersInput } from '../centre/centre-create-nested-one-without-members.input';
import { UserCreateNestedOneWithoutMemberInput } from '../user/user-create-nested-one-without-member.input';

@InputType()
export class MemberCreateWithoutGroupsInput {

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

    @Field(() => CentreCreateNestedOneWithoutMembersInput, {nullable:true})
    centre?: CentreCreateNestedOneWithoutMembersInput;

    @Field(() => UserCreateNestedOneWithoutMemberInput, {nullable:true})
    user?: UserCreateNestedOneWithoutMemberInput;
}
