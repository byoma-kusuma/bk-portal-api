import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class ResponseStatus {
  @Field()
  status: string;
  constructor(status: string) {
    this.status = status;
  }
}
