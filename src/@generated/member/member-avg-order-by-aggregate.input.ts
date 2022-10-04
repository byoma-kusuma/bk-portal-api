import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MemberAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    centreId?: keyof typeof SortOrder;
}
