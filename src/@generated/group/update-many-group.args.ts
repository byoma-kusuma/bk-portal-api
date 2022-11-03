import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupUpdateManyMutationInput } from './group-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GroupWhereInput } from './group-where.input';

@ArgsType()
export class UpdateManyGroupArgs {

    @Field(() => GroupUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupUpdateManyMutationInput)
    data!: GroupUpdateManyMutationInput;

    @Field(() => GroupWhereInput, {nullable:true})
    @Type(() => GroupWhereInput)
    where?: GroupWhereInput;
}
