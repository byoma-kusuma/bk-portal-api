import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenCreateManyInput } from './password-token-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPasswordTokenArgs {

    @Field(() => [PasswordTokenCreateManyInput], {nullable:false})
    @Type(() => PasswordTokenCreateManyInput)
    data!: Array<PasswordTokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
