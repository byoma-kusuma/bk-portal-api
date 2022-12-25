import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MemberAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearOfBirth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    centreId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentAddressId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permanentAddressId?: keyof typeof SortOrder;
}
