import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CentreMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    displayText?: true;

    @Field(() => Boolean, {nullable:true})
    displaySequence?: true;

    @Field(() => Boolean, {nullable:true})
    streetAddress?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    stateProvince?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    uniqueKey?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;
}
