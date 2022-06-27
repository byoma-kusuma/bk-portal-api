import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailCreateManyInput } from './user-detail-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserDetailArgs {

    @Field(() => [UserDetailCreateManyInput], {nullable:false})
    @Type(() => UserDetailCreateManyInput)
    data!: Array<UserDetailCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
