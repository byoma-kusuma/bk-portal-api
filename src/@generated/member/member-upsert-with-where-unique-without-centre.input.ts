import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberUpdateWithoutCentreInput } from './member-update-without-centre.input';
import { MemberCreateWithoutCentreInput } from './member-create-without-centre.input';

@InputType()
export class MemberUpsertWithWhereUniqueWithoutCentreInput {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutCentreInput, {nullable:false})
    @Type(() => MemberUpdateWithoutCentreInput)
    update!: MemberUpdateWithoutCentreInput;

    @Field(() => MemberCreateWithoutCentreInput, {nullable:false})
    @Type(() => MemberCreateWithoutCentreInput)
    create!: MemberCreateWithoutCentreInput;
}
