import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Member } from '../member/member.model';
import { CentreCount } from './centre-count.output';

@ObjectType()
export class Centre {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayText!: string;

    @Field(() => Int, {nullable:false})
    displaySequence!: number;

    @Field(() => String, {nullable:true})
    streetAddress!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    stateProvince!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => [Member], {nullable:true})
    members?: Array<Member>;

    @Field(() => CentreCount, {nullable:false})
    _count?: CentreCount;
}
