import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberOrderByWithRelationInput } from '../member/member-order-by-with-relation.input';
import { GroupOrderByWithRelationInput } from '../group/group-order-by-with-relation.input';

@InputType()
export class MemberGroupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => MemberOrderByWithRelationInput, {nullable:true})
    member?: MemberOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    memberId?: keyof typeof SortOrder;

    @Field(() => GroupOrderByWithRelationInput, {nullable:true})
    group?: GroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;
}
