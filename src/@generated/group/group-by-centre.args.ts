import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CentreWhereInput } from '../centre/centre-where.input';
import { Type } from 'class-transformer';
import { CentreOrderByWithAggregationInput } from '../centre/centre-order-by-with-aggregation.input';
import { CentreScalarFieldEnum } from '../centre/centre-scalar-field.enum';
import { CentreScalarWhereWithAggregatesInput } from '../centre/centre-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByCentreArgs {

    @Field(() => CentreWhereInput, {nullable:true})
    @Type(() => CentreWhereInput)
    where?: CentreWhereInput;

    @Field(() => [CentreOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CentreOrderByWithAggregationInput>;

    @Field(() => [CentreScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CentreScalarFieldEnum>;

    @Field(() => CentreScalarWhereWithAggregatesInput, {nullable:true})
    having?: CentreScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
