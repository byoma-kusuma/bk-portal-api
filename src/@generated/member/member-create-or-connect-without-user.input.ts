import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';

@InputType()
export class MemberCreateOrConnectWithoutUserInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutUserInput, {nullable:false})
    @Type(() => MemberCreateWithoutUserInput)
    create!: MemberCreateWithoutUserInput;
}
