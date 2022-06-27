import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PasswordHistoryWhereInput } from './password-history-where.input';

@InputType()
export class PasswordHistoryRelationFilter {

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    is?: PasswordHistoryWhereInput;

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    isNot?: PasswordHistoryWhereInput;
}
