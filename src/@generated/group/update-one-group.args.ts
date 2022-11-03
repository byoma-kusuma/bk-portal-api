import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupUpdateInput } from './group-update.input';
import { Type } from 'class-transformer';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@ArgsType()
export class UpdateOneGroupArgs {

    @Field(() => GroupUpdateInput, {nullable:false})
    @Type(() => GroupUpdateInput)
    data!: GroupUpdateInput;

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;
}
