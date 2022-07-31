import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserDetailCountAggregate } from './user-detail-count-aggregate.output';
import { UserDetailMinAggregate } from './user-detail-min-aggregate.output';
import { UserDetailMaxAggregate } from './user-detail-max-aggregate.output';

@ObjectType()
export class UserDetailGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    uniqueKey?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => UserDetailCountAggregate, {nullable:true})
    _count?: UserDetailCountAggregate;

    @Field(() => UserDetailMinAggregate, {nullable:true})
    _min?: UserDetailMinAggregate;

    @Field(() => UserDetailMaxAggregate, {nullable:true})
    _max?: UserDetailMaxAggregate;
}
