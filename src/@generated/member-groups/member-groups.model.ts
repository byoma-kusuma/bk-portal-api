import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Member } from '../member/member.model';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';

@ObjectType()
export class MemberGroups {

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Member, {nullable:false})
    member?: Member;

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => Int, {nullable:false})
    groupId!: number;
}
