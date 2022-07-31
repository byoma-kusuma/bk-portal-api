import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserDetailCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:true})
    birthday?: string;

    @Field(() => String, {nullable:true})
    streetAddress?: string;

    @Field(() => String, {nullable:true})
    steetAddress2?: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:true})
    zip?: string;

    @Field(() => String, {nullable:true})
    secondaryEmail?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

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

    @Field(() => String, {nullable:false})
    userId!: string;
}
