import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberUpdateManyWithoutCentreInput } from '../member/member-update-many-without-centre.input';

@InputType()
export class CentreUpdateInput {

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

    @Field(() => MemberUpdateManyWithoutCentreInput, {nullable:true})
    members?: MemberUpdateManyWithoutCentreInput;
}
