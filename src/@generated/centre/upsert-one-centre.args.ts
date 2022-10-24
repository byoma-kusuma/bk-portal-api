import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Type } from 'class-transformer';
import { CentreCreateInput } from './centre-create.input';
import { CentreUpdateInput } from './centre-update.input';

@ArgsType()
export class UpsertOneCentreArgs {

    @Field(() => CentreWhereUniqueInput, {nullable:false})
    @Type(() => CentreWhereUniqueInput)
    where!: CentreWhereUniqueInput;

    @Field(() => CentreCreateInput, {nullable:false})
    @Type(() => CentreCreateInput)
    create!: CentreCreateInput;

    @Field(() => CentreUpdateInput, {nullable:false})
    @Type(() => CentreUpdateInput)
    update!: CentreUpdateInput;
}
