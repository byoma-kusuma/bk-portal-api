import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberGroupsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    memberId?: true;

    @Field(() => Boolean, {nullable:true})
    groupId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
