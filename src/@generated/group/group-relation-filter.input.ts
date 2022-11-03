import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereInput } from './group-where.input';

@InputType()
export class GroupRelationFilter {

    @Field(() => GroupWhereInput, {nullable:true})
    is?: GroupWhereInput;

    @Field(() => GroupWhereInput, {nullable:true})
    isNot?: GroupWhereInput;
}
