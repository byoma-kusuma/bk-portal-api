import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberGroupsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    memberId?: true;

    @Field(() => Boolean, {nullable:true})
    groupId?: true;
}
