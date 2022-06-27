import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailCreateInput } from './user-detail-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserDetailArgs {

    @Field(() => UserDetailCreateInput, {nullable:false})
    @Type(() => UserDetailCreateInput)
    data!: UserDetailCreateInput;
}
