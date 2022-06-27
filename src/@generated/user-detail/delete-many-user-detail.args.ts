import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereInput } from './user-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserDetailArgs {

    @Field(() => UserDetailWhereInput, {nullable:true})
    @Type(() => UserDetailWhereInput)
    where?: UserDetailWhereInput;
}
