import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PasswordTokenWhereInput {

    @Field(() => [PasswordTokenWhereInput], {nullable:true})
    AND?: Array<PasswordTokenWhereInput>;

    @Field(() => [PasswordTokenWhereInput], {nullable:true})
    OR?: Array<PasswordTokenWhereInput>;

    @Field(() => [PasswordTokenWhereInput], {nullable:true})
    NOT?: Array<PasswordTokenWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
