import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupCreateInput } from './group-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGroupArgs {

    @Field(() => GroupCreateInput, {nullable:false})
    @Type(() => GroupCreateInput)
    data!: GroupCreateInput;
}
