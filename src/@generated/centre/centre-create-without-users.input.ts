import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CentreCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayText!: string;

    @Field(() => Int, {nullable:false})
    displaySequence!: number;

    @Field(() => String, {nullable:false})
    streetAddress!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    stateProvince!: string;

    @Field(() => String, {nullable:false})
    country!: string;

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
}
