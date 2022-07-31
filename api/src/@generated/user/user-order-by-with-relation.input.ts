import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserDetailOrderByWithRelationInput } from '../user-detail/user-detail-order-by-with-relation.input';
import { PasswordHistoryOrderByWithRelationInput } from '../password-history/password-history-order-by-with-relation.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDeleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniqueKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => UserDetailOrderByWithRelationInput, {nullable:true})
    detail?: UserDetailOrderByWithRelationInput;

    @Field(() => PasswordHistoryOrderByWithRelationInput, {nullable:true})
    passwordHistory?: PasswordHistoryOrderByWithRelationInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;
}
