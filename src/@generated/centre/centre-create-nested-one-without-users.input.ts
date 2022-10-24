import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreCreateWithoutUsersInput } from './centre-create-without-users.input';
import { Type } from 'class-transformer';
import { CentreCreateOrConnectWithoutUsersInput } from './centre-create-or-connect-without-users.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';

@InputType()
export class CentreCreateNestedOneWithoutUsersInput {

    @Field(() => CentreCreateWithoutUsersInput, {nullable:true})
    @Type(() => CentreCreateWithoutUsersInput)
    create?: CentreCreateWithoutUsersInput;

    @Field(() => CentreCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => CentreCreateOrConnectWithoutUsersInput)
    connectOrCreate?: CentreCreateOrConnectWithoutUsersInput;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    @Type(() => CentreWhereUniqueInput)
    connect?: CentreWhereUniqueInput;
}
