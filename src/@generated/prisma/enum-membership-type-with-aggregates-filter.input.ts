import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipType } from './membership-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumMembershipTypeFilter } from './enum-membership-type-filter.input';

@InputType()
export class EnumMembershipTypeWithAggregatesFilter {

    @Field(() => MembershipType, {nullable:true})
    equals?: keyof typeof MembershipType;

    @Field(() => [MembershipType], {nullable:true})
    in?: Array<keyof typeof MembershipType>;

    @Field(() => [MembershipType], {nullable:true})
    notIn?: Array<keyof typeof MembershipType>;

    @Field(() => EnumMembershipTypeWithAggregatesFilter, {nullable:true})
    not?: EnumMembershipTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumMembershipTypeFilter, {nullable:true})
    _min?: EnumMembershipTypeFilter;

    @Field(() => EnumMembershipTypeFilter, {nullable:true})
    _max?: EnumMembershipTypeFilter;
}
