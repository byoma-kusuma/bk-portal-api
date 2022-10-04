import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereInput } from './centre-where.input';
import { Type } from 'class-transformer';
import { CentreOrderByWithRelationInput } from './centre-order-by-with-relation.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CentreScalarFieldEnum } from './centre-scalar-field.enum';

@ArgsType()
export class FindManyCentreArgs {

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;

    @Field(() => [CentreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CentreOrderByWithRelationInput>;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    cursor?: CentreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CentreScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CentreScalarFieldEnum>;
}
