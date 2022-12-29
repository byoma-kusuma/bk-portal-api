import { InputType, Field, Int } from "@nestjs/graphql";
import { IsNumber, IsOptional } from "class-validator";

@InputType()
export class CreateGroupInput {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  visible: boolean;

  @Field(() => String)
  description: string;

  @Field(() => [Int])
  @IsNumber({}, { each: true })
  @IsOptional()
  memberIds?: Array<number>;
}
