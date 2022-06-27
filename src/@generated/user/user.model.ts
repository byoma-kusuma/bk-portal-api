import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { UserDetail } from '../user-detail/user-detail.model';
import { PasswordHistory } from '../password-history/password-history.model';
import { Role } from '../role/role.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    uniqueKey!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => UserStatus, {nullable:false,defaultValue:'VALIDATION_PENDING'})
    status!: keyof typeof UserStatus;

    @Field(() => UserDetail, {nullable:true})
    detail?: UserDetail | null;

    @Field(() => PasswordHistory, {nullable:true})
    passwordHistory?: PasswordHistory | null;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => String, {nullable:false})
    roleId!: string;
}
