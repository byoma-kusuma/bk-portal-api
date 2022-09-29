import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GroupCreateManyInput } from './group-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGroupArgs {

    @Field(() => [GroupCreateManyInput], {nullable:false})
    @Type(() => GroupCreateManyInput)
    data!: Array<GroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
