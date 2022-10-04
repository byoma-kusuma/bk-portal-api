import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';

@InputType()
export class MemberListRelationFilter {

    @Field(() => MemberWhereInput, {nullable:true})
    every?: MemberWhereInput;

    @Field(() => MemberWhereInput, {nullable:true})
    some?: MemberWhereInput;

    @Field(() => MemberWhereInput, {nullable:true})
    none?: MemberWhereInput;
}
