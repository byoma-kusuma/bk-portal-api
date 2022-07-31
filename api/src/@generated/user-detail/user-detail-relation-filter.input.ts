import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserDetailWhereInput } from './user-detail-where.input';

@InputType()
export class UserDetailRelationFilter {

    @Field(() => UserDetailWhereInput, {nullable:true})
    is?: UserDetailWhereInput;

    @Field(() => UserDetailWhereInput, {nullable:true})
    isNot?: UserDetailWhereInput;
}
