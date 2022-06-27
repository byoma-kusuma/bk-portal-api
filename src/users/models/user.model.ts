import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { UserStatus } from '@prisma/client';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '../../roles/entities/role.entity';

registerEnumType(UserStatus, {
  name: 'Status',
  description: 'Current status of the user within the system',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;

  @HideField()
  password: string;

  @Field((type) => UserStatus)
  status: UserStatus;
}
