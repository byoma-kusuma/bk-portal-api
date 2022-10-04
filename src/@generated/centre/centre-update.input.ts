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

    @Field(() => MemberUpdateManyWithoutCentreInput, {nullable:true})
    members?: MemberUpdateManyWithoutCentreInput;
}
