import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { UserStatus } from "../prisma/user-status.enum";
import { PasswordHistoryUncheckedUpdateOneWithoutUserInput } from "../password-history/password-history-unchecked-update-one-without-user.input";

@InputType()
export class UserUncheckedUpdateWithoutDetailInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  userName?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Boolean, { nullable: true })
  isDeleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  uniqueKey?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => UserStatus, { nullable: true })
  status?: keyof typeof UserStatus;

  @Field(() => String, { nullable: true })
  roleId?: string;

  @Field(() => PasswordHistoryUncheckedUpdateOneWithoutUserInput, {
    nullable: true
  })
  passwordHistory?: PasswordHistoryUncheckedUpdateOneWithoutUserInput;
}
