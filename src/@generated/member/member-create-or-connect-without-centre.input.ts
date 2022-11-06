import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutCentreInput } from './member-create-without-centre.input';

@InputType()
export class MemberCreateOrConnectWithoutCentreInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateWithoutCentreInput, {nullable:false})
    @Type(() => MemberCreateWithoutCentreInput)
    create!: MemberCreateWithoutCentreInput;
}
