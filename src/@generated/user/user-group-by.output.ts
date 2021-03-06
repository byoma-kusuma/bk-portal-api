import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { UserStatus } from "../prisma/user-status.enum";
import { UserCountAggregate } from "./user-count-aggregate.output";
import { UserMinAggregate } from "./user-min-aggregate.output";
import { UserMaxAggregate } from "./user-max-aggregate.output";

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  userName!: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Boolean, { nullable: false })
  isDeleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: true })
  uniqueKey?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => UserStatus, { nullable: false })
  status!: keyof typeof UserStatus;

  @Field(() => String, { nullable: false })
  roleId!: string;

  @Field(() => UserCountAggregate, { nullable: true })
  _count?: UserCountAggregate;

  @Field(() => UserMinAggregate, { nullable: true })
  _min?: UserMinAggregate;

  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: UserMaxAggregate;
}
