import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Group } from "../groups/entities/group.entity";
import { Member } from "../member/entities/member.entity";

export class Test {
  @Field()
  amogh: string;
}

@ObjectType()
export class MemberGroupWithoutMember {
  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => String, { nullable: true })
  createdBy!: string | null;

  @Field(() => Int, { nullable: false })
  memberId!: number;

  @Field(() => Group, { nullable: false })
  group?: Group;

  @Field(() => Int, { nullable: false })
  groupId!: number;
}

@ObjectType()
export class MemberGroupWithoutGroup {
  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => String, { nullable: true })
  createdBy!: string | null;

  @Field(() => Member, { nullable: true })
  member?: Member;

  @Field(() => Int, { nullable: false })
  memberId!: number;

  @Field(() => Int, { nullable: false })
  groupId!: number;
}
