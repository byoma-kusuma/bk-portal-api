import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MemberGroupsUncheckedCreateWithoutGroupInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Int, {nullable:false})
    memberId!: number;
}
