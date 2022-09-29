import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CentreMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayText?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displaySequence?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateProvince?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;
}
