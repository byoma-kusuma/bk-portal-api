import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MemberWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => Int, {nullable:true})
    currentAddressId?: number;

    @Field(() => Int, {nullable:true})
    permanentAddressId?: number;
}
