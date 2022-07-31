import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreAffiliationType } from './centre-affiliation-type.enum';

@InputType()
export class EnumCentreAffiliationTypeFilter {

    @Field(() => CentreAffiliationType, {nullable:true})
    equals?: keyof typeof CentreAffiliationType;

    @Field(() => [CentreAffiliationType], {nullable:true})
    in?: Array<keyof typeof CentreAffiliationType>;

    @Field(() => [CentreAffiliationType], {nullable:true})
    notIn?: Array<keyof typeof CentreAffiliationType>;

    @Field(() => EnumCentreAffiliationTypeFilter, {nullable:true})
    not?: EnumCentreAffiliationTypeFilter;
}
