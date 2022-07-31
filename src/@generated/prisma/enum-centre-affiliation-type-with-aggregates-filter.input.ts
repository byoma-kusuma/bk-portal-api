import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreAffiliationType } from './centre-affiliation-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumCentreAffiliationTypeFilter } from './enum-centre-affiliation-type-filter.input';

@InputType()
export class EnumCentreAffiliationTypeWithAggregatesFilter {

    @Field(() => CentreAffiliationType, {nullable:true})
    equals?: keyof typeof CentreAffiliationType;

    @Field(() => [CentreAffiliationType], {nullable:true})
    in?: Array<keyof typeof CentreAffiliationType>;

    @Field(() => [CentreAffiliationType], {nullable:true})
    notIn?: Array<keyof typeof CentreAffiliationType>;

    @Field(() => EnumCentreAffiliationTypeWithAggregatesFilter, {nullable:true})
    not?: EnumCentreAffiliationTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumCentreAffiliationTypeFilter, {nullable:true})
    _min?: EnumCentreAffiliationTypeFilter;

    @Field(() => EnumCentreAffiliationTypeFilter, {nullable:true})
    _max?: EnumCentreAffiliationTypeFilter;
}
