import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PasswordHistoryMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    password?: string;

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

    @Field(() => String, {nullable:true})
    userId?: string;
}
