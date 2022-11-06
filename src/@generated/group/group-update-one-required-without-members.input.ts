import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutMembersInput } from './group-create-without-members.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutMembersInput } from './group-create-or-connect-without-members.input';
import { GroupUpsertWithoutMembersInput } from './group-upsert-without-members.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutMembersInput } from './group-update-without-members.input';

@InputType()
export class GroupUpdateOneRequiredWithoutMembersInput {

    @Field(() => GroupCreateWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateWithoutMembersInput)
    create?: GroupCreateWithoutMembersInput;

    @Field(() => GroupCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutMembersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput;

    @Field(() => GroupUpsertWithoutMembersInput, {nullable:true})
    @Type(() => GroupUpsertWithoutMembersInput)
    upsert?: GroupUpsertWithoutMembersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutMembersInput, {nullable:true})
    @Type(() => GroupUpdateWithoutMembersInput)
    update?: GroupUpdateWithoutMembersInput;
}
