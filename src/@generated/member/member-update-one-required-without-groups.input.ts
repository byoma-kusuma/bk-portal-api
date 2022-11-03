import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutGroupsInput } from './member-create-without-groups.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutGroupsInput } from './member-create-or-connect-without-groups.input';
import { MemberUpsertWithoutGroupsInput } from './member-upsert-without-groups.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutGroupsInput } from './member-update-without-groups.input';

@InputType()
export class MemberUpdateOneRequiredWithoutGroupsInput {

    @Field(() => MemberCreateWithoutGroupsInput, {nullable:true})
    @Type(() => MemberCreateWithoutGroupsInput)
    create?: MemberCreateWithoutGroupsInput;

    @Field(() => MemberCreateOrConnectWithoutGroupsInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: MemberCreateOrConnectWithoutGroupsInput;

    @Field(() => MemberUpsertWithoutGroupsInput, {nullable:true})
    @Type(() => MemberUpsertWithoutGroupsInput)
    upsert?: MemberUpsertWithoutGroupsInput;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutGroupsInput, {nullable:true})
    @Type(() => MemberUpdateWithoutGroupsInput)
    update?: MemberUpdateWithoutGroupsInput;
}
