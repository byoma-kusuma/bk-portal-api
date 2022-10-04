import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreUpdateManyMutationInput } from './centre-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CentreWhereInput } from './centre-where.input';

@ArgsType()
export class UpdateManyCentreArgs {

    @Field(() => CentreUpdateManyMutationInput, {nullable:false})
    @Type(() => CentreUpdateManyMutationInput)
    data!: CentreUpdateManyMutationInput;

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;
}
