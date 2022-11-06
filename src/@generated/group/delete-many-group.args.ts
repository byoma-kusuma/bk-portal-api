import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGroupArgs {

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;
}
