import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberUncheckedCreateNestedManyWithoutCentreInput } from '../member/member-unchecked-create-nested-many-without-centre.input';

@InputType()
export class CentreUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayText!: string;

    @Field(() => Int, {nullable:false})
    displaySequence!: number;

    @Field(() => String, {nullable:true})
    streetAddress?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    stateProvince?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => MemberUncheckedCreateNestedManyWithoutCentreInput, {nullable:true})
    members?: MemberUncheckedCreateNestedManyWithoutCentreInput;
}
