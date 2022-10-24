import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreWhereInput } from './centre-where.input';

@InputType()
export class CentreRelationFilter {

    @Field(() => CentreWhereInput, {nullable:true})
    is?: CentreWhereInput;

    @Field(() => CentreWhereInput, {nullable:true})
    isNot?: CentreWhereInput;
}
