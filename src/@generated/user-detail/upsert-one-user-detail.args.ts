import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { Type } from 'class-transformer';
import { UserDetailCreateInput } from './user-detail-create.input';
import { UserDetailUpdateInput } from './user-detail-update.input';

@ArgsType()
export class UpsertOneUserDetailArgs {

    @Field(() => UserDetailWhereUniqueInput, {nullable:false})
    @Type(() => UserDetailWhereUniqueInput)
    where!: UserDetailWhereUniqueInput;

    @Field(() => UserDetailCreateInput, {nullable:false})
    @Type(() => UserDetailCreateInput)
    create!: UserDetailCreateInput;

    @Field(() => UserDetailUpdateInput, {nullable:false})
    @Type(() => UserDetailUpdateInput)
    update!: UserDetailUpdateInput;
}
