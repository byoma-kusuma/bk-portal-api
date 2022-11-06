import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutMemberGroupsInput } from './member-create-without-member-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutMemberGroupsInput } from './member-create-or-connect-without-member-groups.input';
import { MemberUpsertWithoutMemberGroupsInput } from './member-upsert-without-member-groups.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutMemberGroupsInput } from './member-update-without-member-groups.input';

@InputType()
export class MemberUpdateOneRequiredWithoutMemberGroupsInput {

    @Field(() => MemberCreateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberCreateWithoutMemberGroupsInput)
    create?: MemberCreateWithoutMemberGroupsInput;

    @Field(() => MemberCreateOrConnectWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutMemberGroupsInput)
    connectOrCreate?: MemberCreateOrConnectWithoutMemberGroupsInput;

    @Field(() => MemberUpsertWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberUpsertWithoutMemberGroupsInput)
    upsert?: MemberUpsertWithoutMemberGroupsInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => MemberUpdateWithoutMemberGroupsInput)
    update?: MemberUpdateWithoutMemberGroupsInput;
}
