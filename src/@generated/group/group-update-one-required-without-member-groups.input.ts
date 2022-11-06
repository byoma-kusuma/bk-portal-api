import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutMemberGroupsInput } from './group-create-without-member-groups.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutMemberGroupsInput } from './group-create-or-connect-without-member-groups.input';
import { GroupUpsertWithoutMemberGroupsInput } from './group-upsert-without-member-groups.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutMemberGroupsInput } from './group-update-without-member-groups.input';

@InputType()
export class GroupUpdateOneRequiredWithoutMemberGroupsInput {

    @Field(() => GroupCreateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupCreateWithoutMemberGroupsInput)
    create?: GroupCreateWithoutMemberGroupsInput;

    @Field(() => GroupCreateOrConnectWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutMemberGroupsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutMemberGroupsInput;

    @Field(() => GroupUpsertWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupUpsertWithoutMemberGroupsInput)
    upsert?: GroupUpsertWithoutMemberGroupsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutMemberGroupsInput, {nullable:true})
    @Type(() => GroupUpdateWithoutMemberGroupsInput)
    update?: GroupUpdateWithoutMemberGroupsInput;
}
