import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserStatus } from '../prisma/user-status.enum';
import { PasswordHistory } from '../password-history/password-history.model';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { Member } from '../member/member.model';
import { PasswordToken } from '../password-token/password-token.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

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

    @Field(() => PasswordHistory, {nullable:true})
    passwordHistory?: PasswordHistory | null;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Member, {nullable:false})
    member?: Member;

    @Field(() => Int, {nullable:false})
    memberId!: number;

    @Field(() => PasswordToken, {nullable:true})
    passwordToken?: PasswordToken | null;
}
