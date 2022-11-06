import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreCreateManyInput } from './centre-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCentreArgs {

    @Field(() => [CentreCreateManyInput], {nullable:false})
    @Type(() => CentreCreateManyInput)
    data!: Array<CentreCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
