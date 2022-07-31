import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipType } from './membership-type.enum';

@InputType()
export class EnumMembershipTypeFilter {

    @Field(() => MembershipType, {nullable:true})
    equals?: keyof typeof MembershipType;

    @Field(() => [MembershipType], {nullable:true})
    in?: Array<keyof typeof MembershipType>;

    @Field(() => [MembershipType], {nullable:true})
    notIn?: Array<keyof typeof MembershipType>;

    @Field(() => EnumMembershipTypeFilter, {nullable:true})
    not?: EnumMembershipTypeFilter;
}
