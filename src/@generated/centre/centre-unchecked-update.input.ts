import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberUncheckedUpdateManyWithoutCentreInput } from '../member/member-unchecked-update-many-without-centre.input';

@InputType()
export class CentreUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    displayText?: string;

    @Field(() => Int, {nullable:true})
    displaySequence?: number;

    @Field(() => String, {nullable:true})
    streetAddress?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    stateProvince?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => MemberUncheckedUpdateManyWithoutCentreInput, {nullable:true})
    members?: MemberUncheckedUpdateManyWithoutCentreInput;
}
