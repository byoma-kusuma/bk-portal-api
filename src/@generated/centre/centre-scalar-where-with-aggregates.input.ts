import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CentreScalarWhereWithAggregatesInput {

    @Field(() => [CentreScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CentreScalarWhereWithAggregatesInput>;

    @Field(() => [CentreScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CentreScalarWhereWithAggregatesInput>;

    @Field(() => [CentreScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CentreScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    displayText?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    displaySequence?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    streetAddress?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    city?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stateProvince?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    country?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uniqueKey?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    updatedBy?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdBy?: StringWithAggregatesFilter;
}
