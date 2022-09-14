import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PasswordTokenScalarWhereWithAggregatesInput {

    @Field(() => [PasswordTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PasswordTokenScalarWhereWithAggregatesInput>;

    @Field(() => [PasswordTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PasswordTokenScalarWhereWithAggregatesInput>;

    @Field(() => [PasswordTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PasswordTokenScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
