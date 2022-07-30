import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderType } from './gender-type.enum';

@InputType()
export class EnumGenderTypeFilter {

    @Field(() => GenderType, {nullable:true})
    equals?: keyof typeof GenderType;

    @Field(() => [GenderType], {nullable:true})
    in?: Array<keyof typeof GenderType>;

    @Field(() => [GenderType], {nullable:true})
    notIn?: Array<keyof typeof GenderType>;

    @Field(() => EnumGenderTypeFilter, {nullable:true})
    not?: EnumGenderTypeFilter;
}
