import { InputType, Field, Int } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

@InputType()
export class CreateGroupInput {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  description: string;

  @Field(() => [Int], { nullable: true })
  @IsNumber({}, { each: true })
  memberIds: Array<number>;
}
