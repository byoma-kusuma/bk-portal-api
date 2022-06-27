import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailUpdateInput } from './user-detail-update.input';
import { Type } from 'class-transformer';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';

@ArgsType()
export class UpdateOneUserDetailArgs {

    @Field(() => UserDetailUpdateInput, {nullable:false})
    @Type(() => UserDetailUpdateInput)
    data!: UserDetailUpdateInput;

    @Field(() => UserDetailWhereUniqueInput, {nullable:false})
    @Type(() => UserDetailWhereUniqueInput)
    where!: UserDetailWhereUniqueInput;
}
