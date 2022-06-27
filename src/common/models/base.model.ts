import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  isDeleted: boolean;

  @Field({
    description: 'Unique key associated with the object.',
  })
  uniqueKey?: string;

  // @Field({
  //   description: 'Identifies who created the object.',
  // })
  // createdBy?: string;

  // @Field({
  //   description: 'Identifies who made the last update to the object.',
  // })
  // updatedBy?: string;
}
