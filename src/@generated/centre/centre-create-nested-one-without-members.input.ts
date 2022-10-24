import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreCreateWithoutMembersInput } from './centre-create-without-members.input';
import { Type } from 'class-transformer';
import { CentreCreateOrConnectWithoutMembersInput } from './centre-create-or-connect-without-members.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';

@InputType()
export class CentreCreateNestedOneWithoutMembersInput {

    @Field(() => CentreCreateWithoutMembersInput, {nullable:true})
    @Type(() => CentreCreateWithoutMembersInput)
    create?: CentreCreateWithoutMembersInput;

    @Field(() => CentreCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => CentreCreateOrConnectWithoutMembersInput)
    connectOrCreate?: CentreCreateOrConnectWithoutMembersInput;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    @Type(() => CentreWhereUniqueInput)
    connect?: CentreWhereUniqueInput;
}
