import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PasswordTokenCountAggregate } from './password-token-count-aggregate.output';
import { PasswordTokenMinAggregate } from './password-token-min-aggregate.output';
import { PasswordTokenMaxAggregate } from './password-token-max-aggregate.output';

@ObjectType()
export class PasswordTokenGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => PasswordTokenCountAggregate, {nullable:true})
    _count?: PasswordTokenCountAggregate;

    @Field(() => PasswordTokenMinAggregate, {nullable:true})
    _min?: PasswordTokenMinAggregate;

    @Field(() => PasswordTokenMaxAggregate, {nullable:true})
    _max?: PasswordTokenMaxAggregate;
}
