import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';
import { Type } from 'class-transformer';
import { MemberOrderByWithRelationInput } from './member-order-by-with-relation.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberScalarFieldEnum } from './member-scalar-field.enum';

@ArgsType()
export class FindFirstMemberArgs {

    @Field(() => MemberWhereInput, {nullable:true})
    @Type(() => MemberWhereInput)
    where?: MemberWhereInput;

    @Field(() => [MemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberOrderByWithRelationInput>;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    cursor?: MemberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MemberScalarFieldEnum>;
}
