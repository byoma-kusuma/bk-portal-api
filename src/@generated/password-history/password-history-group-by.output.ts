import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PasswordHistoryCountAggregate } from './password-history-count-aggregate.output';
import { PasswordHistoryMinAggregate } from './password-history-min-aggregate.output';
import { PasswordHistoryMaxAggregate } from './password-history-max-aggregate.output';

@ObjectType()
export class PasswordHistoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => PasswordHistoryCountAggregate, {nullable:true})
    _count?: PasswordHistoryCountAggregate;

    @Field(() => PasswordHistoryMinAggregate, {nullable:true})
    _min?: PasswordHistoryMinAggregate;

    @Field(() => PasswordHistoryMaxAggregate, {nullable:true})
    _max?: PasswordHistoryMaxAggregate;
}
