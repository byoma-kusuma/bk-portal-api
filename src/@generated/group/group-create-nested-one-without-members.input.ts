import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutMembersInput } from './group-create-without-members.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutMembersInput } from './group-create-or-connect-without-members.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutMembersInput {

    @Field(() => GroupCreateWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateWithoutMembersInput)
    create?: GroupCreateWithoutMembersInput;

    @Field(() => GroupCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutMembersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
