import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereInput } from './user-detail-where.input';
import { Type } from 'class-transformer';
import { UserDetailOrderByWithRelationInput } from './user-detail-order-by-with-relation.input';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserDetailScalarFieldEnum } from './user-detail-scalar-field.enum';

@ArgsType()
export class FindFirstUserDetailArgs {

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

    @Field(() => [UserDetailScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserDetailScalarFieldEnum>;
}
