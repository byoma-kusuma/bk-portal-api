import { InputType, Field, Int } from "@nestjs/graphql";
import { SoftDeleteBaseModel } from "../../../common/models/softdeletebase.model";

@InputType()
export class CreateEventInput extends SoftDeleteBaseModel {
  @Field(() => Date, { description: "Event start date" })
  startDate: Date;

  @Field(() => Date, { description: "Event end date" })
  endDate: Date;

  @Field(() => Boolean, {
    description:
      "After the event ends or at a certain specific time, the event is locked and event related details cannot be updated/deleted"
  })
  isLocked: boolean;

  @Field(() => String, {
    description: "Some notes related to the event"
  })
  notes: string;

  @Field(() => String, {
    description: "Type of the event"
  })
  type: string;

  @Field(() => [EventMemberDetails], {
    description: "Details of members attending the event"
  })
  eventMemberDetails: Array<EventMemberDetails>;
}

@InputType()
class EventMemberDetails {
  @Field(() => Int)
  memberId: string;

  @Field(() => String)
  type: string;

  @Field(() => Boolean)
  hasAttended: boolean;
}
