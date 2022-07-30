import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryCreateManyInput } from './password-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPasswordHistoryArgs {

    @Field(() => [PasswordHistoryCreateManyInput], {nullable:false})
    @Type(() => PasswordHistoryCreateManyInput)
    data!: Array<PasswordHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
