import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserDetail {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    company!: string | null;

    @Field(() => String, {nullable:true})
    birthday!: string | null;

    @Field(() => String, {nullable:true})
    streetAddress!: string | null;

    @Field(() => String, {nullable:true})
    steetAddress2!: string | null;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => String, {nullable:true})
    zip!: string | null;

    @Field(() => String, {nullable:true})
    secondaryEmail!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    uniqueKey!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;
}
