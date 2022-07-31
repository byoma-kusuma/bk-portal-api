import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereInput } from './user-detail-where.input';
import { Type } from 'class-transformer';
import { UserDetailOrderByWithRelationInput } from './user-detail-order-by-with-relation.input';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserDetailCountAggregateInput } from './user-detail-count-aggregate.input';
import { UserDetailMinAggregateInput } from './user-detail-min-aggregate.input';
import { UserDetailMaxAggregateInput } from './user-detail-max-aggregate.input';

@ArgsType()
export class UserDetailAggregateArgs {

    @Field(() => UserDetailWhereInput, {nullable:true})
    @Type(() => UserDetailWhereInput)
    where?: UserDetailWhereInput;

    @Field(() => [UserDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserDetailOrderByWithRelationInput>;

    @Field(() => UserDetailWhereUniqueInput, {nullable:true})
    cursor?: UserDetailWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserDetailCountAggregateInput, {nullable:true})
    _count?: UserDetailCountAggregateInput;

    @Field(() => UserDetailMinAggregateInput, {nullable:true})
    _min?: UserDetailMinAggregateInput;

    @Field(() => UserDetailMaxAggregateInput, {nullable:true})
    _max?: UserDetailMaxAggregateInput;
}
