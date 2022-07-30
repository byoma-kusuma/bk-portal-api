import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class PasswordHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;
}
