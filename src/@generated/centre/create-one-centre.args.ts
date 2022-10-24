import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreCreateInput } from './centre-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCentreArgs {

    @Field(() => CentreCreateInput, {nullable:false})
    @Type(() => CentreCreateInput)
    data!: CentreCreateInput;
}
