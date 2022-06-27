import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDetailWhereUniqueInput } from './user-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserDetailArgs {

    @Field(() => UserDetailWhereUniqueInput, {nullable:false})
    @Type(() => UserDetailWhereUniqueInput)
    where!: UserDetailWhereUniqueInput;
}
