import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreUpdateInput } from './centre-update.input';
import { Type } from 'class-transformer';
import { CentreWhereUniqueInput } from './centre-where-unique.input';

@ArgsType()
export class UpdateOneCentreArgs {

    @Field(() => CentreUpdateInput, {nullable:false})
    @Type(() => CentreUpdateInput)
    data!: CentreUpdateInput;

    @Field(() => CentreWhereUniqueInput, {nullable:false})
    @Type(() => CentreWhereUniqueInput)
    where!: CentreWhereUniqueInput;
}
