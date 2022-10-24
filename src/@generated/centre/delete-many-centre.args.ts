import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereInput } from './centre-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCentreArgs {

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;
}
