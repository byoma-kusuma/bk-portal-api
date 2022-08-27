import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordTokenWhereInput } from './password-token-where.input';
import { Type } from 'class-transformer';
import { PasswordTokenOrderByWithRelationInput } from './password-token-order-by-with-relation.input';
import { PasswordTokenWhereUniqueInput } from './password-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordTokenScalarFieldEnum } from './password-token-scalar-field.enum';

@ArgsType()
export class FindFirstPasswordTokenArgs {

    @Field(() => PasswordTokenWhereInput, {nullable:true})
    @Type(() => PasswordTokenWhereInput)
    where?: PasswordTokenWhereInput;

    @Field(() => [PasswordTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordTokenOrderByWithRelationInput>;

    @Field(() => PasswordTokenWhereUniqueInput, {nullable:true})
    cursor?: PasswordTokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PasswordTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PasswordTokenScalarFieldEnum>;
}
