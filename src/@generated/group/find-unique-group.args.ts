import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGroupArgs {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;
}
