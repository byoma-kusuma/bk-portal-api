import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Type } from '@prisma/client';
import { BaseModel } from '../../common/models/base.model';
import { User } from '../../users/models/user.model';

registerEnumType(Type, {
  name: 'Role_Type',
  description: 'Type of the role',
});

@ObjectType()
export class Role extends BaseModel {
  users: User[];
  name: string;

  @Field((type) => Type) // it's very important
  type: Type;
}
