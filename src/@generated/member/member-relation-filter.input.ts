import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';

@InputType()
export class MemberRelationFilter {

    @Field(() => MemberWhereInput, {nullable:true})
    is?: MemberWhereInput;

    @Field(() => MemberWhereInput, {nullable:true})
    isNot?: MemberWhereInput;
}
