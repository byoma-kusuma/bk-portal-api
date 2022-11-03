import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MemberGroupsMemberIdGroupIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;
}
