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

    @Field(() => String, {nullable:false})
    streetAddress!: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    stateProvince!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    uniqueKey!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => [Member], {nullable:true})
    users?: Array<Member>;

    @Field(() => CentreCount, {nullable:false})
    _count?: CentreCount;
}
