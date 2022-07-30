import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from './type.enum';
import { IntFilter } from './int-filter.input';
import { EnumTypeFilter } from './enum-type-filter.input';

@InputType()
export class EnumTypeWithAggregatesFilter {

    @Field(() => Type, {nullable:true})
    equals?: keyof typeof Type;

    @Field(() => [Type], {nullable:true})
    in?: Array<keyof typeof Type>;

    @Field(() => [Type], {nullable:true})
    notIn?: Array<keyof typeof Type>;

    @Field(() => EnumTypeWithAggregatesFilter, {nullable:true})
    not?: EnumTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumTypeFilter, {nullable:true})
    _min?: EnumTypeFilter;

    @Field(() => EnumTypeFilter, {nullable:true})
    _max?: EnumTypeFilter;
}
