import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberUpdateWithoutCentreInput } from './member-update-without-centre.input';

@InputType()
export class MemberUpdateWithWhereUniqueWithoutCentreInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutCentreInput, {nullable:false})
    @Type(() => MemberUpdateWithoutCentreInput)
    data!: MemberUpdateWithoutCentreInput;
}
