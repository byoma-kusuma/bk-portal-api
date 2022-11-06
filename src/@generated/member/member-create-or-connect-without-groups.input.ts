import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutGroupsInput } from './member-create-without-groups.input';

@InputType()
export class MemberCreateOrConnectWithoutGroupsInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutGroupsInput, {nullable:false})
    @Type(() => MemberCreateWithoutGroupsInput)
    create!: MemberCreateWithoutGroupsInput;
}
