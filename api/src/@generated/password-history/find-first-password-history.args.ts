import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PasswordHistoryWhereInput } from './password-history-where.input';
import { Type } from 'class-transformer';
import { PasswordHistoryOrderByWithRelationInput } from './password-history-order-by-with-relation.input';
import { PasswordHistoryWhereUniqueInput } from './password-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PasswordHistoryScalarFieldEnum } from './password-history-scalar-field.enum';

@ArgsType()
export class FindFirstPasswordHistoryArgs {

    @Field(() => PasswordHistoryWhereInput, {nullable:true})
    @Type(() => PasswordHistoryWhereInput)
    where?: PasswordHistoryWhereInput;

    @Field(() => [PasswordHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PasswordHistoryOrderByWithRelationInput>;

    @Field(() => PasswordHistoryWhereUniqueInput, {nullable:true})
    cursor?: PasswordHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PasswordHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PasswordHistoryScalarFieldEnum>;
}
