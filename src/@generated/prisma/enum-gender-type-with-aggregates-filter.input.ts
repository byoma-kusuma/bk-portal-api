import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumGenderTypeFilter } from './enum-gender-type-filter.input';

@InputType()
export class EnumGenderTypeWithAggregatesFilter {

    @Field(() => GenderType, {nullable:true})
    equals?: keyof typeof GenderType;

    @Field(() => [GenderType], {nullable:true})
    in?: Array<keyof typeof GenderType>;

    @Field(() => [GenderType], {nullable:true})
    notIn?: Array<keyof typeof GenderType>;

    @Field(() => EnumGenderTypeWithAggregatesFilter, {nullable:true})
    not?: EnumGenderTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumGenderTypeFilter, {nullable:true})
    _min?: EnumGenderTypeFilter;

    @Field(() => EnumGenderTypeFilter, {nullable:true})
    _max?: EnumGenderTypeFilter;
}
