import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CentreCount {

    @Field(() => Int, {nullable:false})
    members?: number;
}
