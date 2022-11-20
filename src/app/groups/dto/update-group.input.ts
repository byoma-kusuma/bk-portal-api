import { InputType, Field, Int } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

@InputType()
export class UpdateGroupInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  id: number;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  description: string;

  @Field(() => [Int])
  @IsNumber({}, { each: true })
  memberIds: Array<number>;
}
