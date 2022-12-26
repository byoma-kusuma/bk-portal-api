import { Field, ObjectType } from "@nestjs/graphql";
import { MemberAbhisekha } from "@prisma/client";
import { Abhisekha } from "../abhisekha/entities/abhisekha.entity";
import { Member } from "../member/entities/member.entity";

@ObjectType()
export class MemberWithMemberAbhisekhaEntity extends Member {
  @Field(() => MemberAbhisekhaEntity, { nullable: true })
  memberAbhisekha: Pick<
    MemberAbhisekha,
    "abhisekhaDate" | "abhisekhaPlace" | "type"
  >;
}

@ObjectType()
export class AbhisekhaWithMemberAbhisekhaEntity extends Abhisekha {
  @Field(() => MemberAbhisekhaEntity, { nullable: true })
  memberAbhisekha: Pick<
    MemberAbhisekha,
    "abhisekhaDate" | "abhisekhaPlace" | "type"
  >;
}

@ObjectType()
export class MemberAbhisekhaEntity {
  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => Date, { nullable: true })
  abhisekhaDate: Date;

  @Field(() => String, { nullable: true })
  abhisekhaPlace: string;
}
