import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MemberGroupsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    memberId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;
}
