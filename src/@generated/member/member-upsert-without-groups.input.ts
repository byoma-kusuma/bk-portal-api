import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberUpdateWithoutGroupsInput } from './member-update-without-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateWithoutGroupsInput } from './member-create-without-groups.input';

@InputType()
export class MemberUpsertWithoutGroupsInput {

    @Field(() => MemberUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => MemberUpdateWithoutGroupsInput)
    update!: MemberUpdateWithoutGroupsInput;

    @Field(() => MemberCreateWithoutGroupsInput, {nullable:false})
    @Type(() => MemberCreateWithoutGroupsInput)
    create!: MemberCreateWithoutGroupsInput;
}
