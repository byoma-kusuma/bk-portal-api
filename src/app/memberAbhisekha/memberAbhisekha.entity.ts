import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { Abhisekha } from "../abhisekha/entities/abhisekha.entity";
import { Member } from "../member/entities/member.entity";

@ObjectType()
export class MemberAbhisekhaWithoutAbhisekha {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Date, { nullable: false })
  abhisekhaDate: Date;

  @Field(() => String, { nullable: false })
  abhisekhaPlace: string;

  @Field(() => Int, { nullable: false })
  abhishekaId: number;

  @Field(() => Member, { nullable: false })
  member?: Member;

  @Field(() => Int, { nullable: false })
  memberId: number;
}

@ObjectType()
export class MemberAbhisekhaWithoutMember {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Date, { nullable: false })
  abhisekhaDate: Date;

  @Field(() => String, { nullable: false })
  abhisekhaPlace: string;

  @Field(() => Abhisekha, { nullable: false })
  abhisheka?: Abhisekha;

  @Field(() => Int, { nullable: false })
  abhishekaId: number;

  @Field(() => Int, { nullable: false })
  memberId: number;
}
