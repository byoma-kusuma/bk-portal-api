import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberGroupsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    memberId?: true;

    @Field(() => Boolean, {nullable:true})
    groupId?: true;
}
