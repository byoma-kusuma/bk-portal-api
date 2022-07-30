import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from './type.enum';

@InputType()
export class EnumTypeFilter {

    @Field(() => Type, {nullable:true})
    equals?: keyof typeof Type;

    @Field(() => [Type], {nullable:true})
    in?: Array<keyof typeof Type>;

    @Field(() => [Type], {nullable:true})
    notIn?: Array<keyof typeof Type>;

    @Field(() => EnumTypeFilter, {nullable:true})
    not?: EnumTypeFilter;
}
