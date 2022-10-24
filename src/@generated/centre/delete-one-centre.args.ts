import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCentreArgs {

    @Field(() => CentreWhereUniqueInput, {nullable:false})
    @Type(() => CentreWhereUniqueInput)
    where!: CentreWhereUniqueInput;
}
