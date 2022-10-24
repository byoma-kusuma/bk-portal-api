import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreCreateWithoutMembersInput } from './centre-create-without-members.input';
import { Type } from 'class-transformer';
import { CentreCreateOrConnectWithoutMembersInput } from './centre-create-or-connect-without-members.input';
import { CentreUpsertWithoutMembersInput } from './centre-upsert-without-members.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { CentreUpdateWithoutMembersInput } from './centre-update-without-members.input';

@InputType()
export class CentreUpdateOneWithoutMembersInput {

    @Field(() => CentreCreateWithoutMembersInput, {nullable:true})
    @Type(() => CentreCreateWithoutMembersInput)
    create?: CentreCreateWithoutMembersInput;

    @Field(() => CentreCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => CentreCreateOrConnectWithoutMembersInput)
    connectOrCreate?: CentreCreateOrConnectWithoutMembersInput;

    @Field(() => CentreUpsertWithoutMembersInput, {nullable:true})
    @Type(() => CentreUpsertWithoutMembersInput)
    upsert?: CentreUpsertWithoutMembersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    @Type(() => CentreWhereUniqueInput)
    connect?: CentreWhereUniqueInput;

    @Field(() => CentreUpdateWithoutMembersInput, {nullable:true})
    @Type(() => CentreUpdateWithoutMembersInput)
    update?: CentreUpdateWithoutMembersInput;
}
