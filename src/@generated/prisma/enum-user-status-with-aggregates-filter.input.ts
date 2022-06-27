import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';
import { IntFilter } from './int-filter.input';
import { EnumUserStatusFilter } from './enum-user-status-filter.input';

@InputType()
export class EnumUserStatusWithAggregatesFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: keyof typeof UserStatus;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<keyof typeof UserStatus>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<keyof typeof UserStatus>;

    @Field(() => EnumUserStatusWithAggregatesFilter, {nullable:true})
    not?: EnumUserStatusWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumUserStatusFilter, {nullable:true})
    _min?: EnumUserStatusFilter;

    @Field(() => EnumUserStatusFilter, {nullable:true})
    _max?: EnumUserStatusFilter;
}
