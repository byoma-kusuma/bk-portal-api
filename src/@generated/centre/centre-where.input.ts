import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MemberListRelationFilter } from '../member/member-list-relation-filter.input';

@InputType()
export class CentreWhereInput {

    @Field(() => [CentreWhereInput], {nullable:true})
    AND?: Array<CentreWhereInput>;

    @Field(() => [CentreWhereInput], {nullable:true})
    OR?: Array<CentreWhereInput>;

    @Field(() => [CentreWhereInput], {nullable:true})
    NOT?: Array<CentreWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    displayText?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    displaySequence?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    streetAddress?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateProvince?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => MemberListRelationFilter, {nullable:true})
    members?: MemberListRelationFilter;
}
