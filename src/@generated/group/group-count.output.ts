import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GroupCount {

    @Field(() => Int, {nullable:false})
    memberGroups?: number;
}
