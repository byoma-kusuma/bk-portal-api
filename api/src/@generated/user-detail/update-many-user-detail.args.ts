import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailUpdateManyMutationInput } from './user-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserDetailWhereInput } from './user-detail-where.input';

@ArgsType()
export class UpdateManyUserDetailArgs {

    @Field(() => UserDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => UserDetailUpdateManyMutationInput)
    data!: UserDetailUpdateManyMutationInput;

    @Field(() => UserDetailWhereInput, {nullable:true})
    @Type(() => UserDetailWhereInput)
    where?: UserDetailWhereInput;
}
