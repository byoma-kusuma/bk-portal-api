import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordTokenWhereInput } from './password-token-where.input';

@InputType()
export class PasswordTokenRelationFilter {

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    is?: PasswordTokenWhereInput;

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    isNot?: PasswordTokenWhereInput;
}
