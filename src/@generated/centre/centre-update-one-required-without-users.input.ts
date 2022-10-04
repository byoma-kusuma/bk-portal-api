import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreCreateWithoutUsersInput } from './centre-create-without-users.input';
import { Type } from 'class-transformer';
import { CentreCreateOrConnectWithoutUsersInput } from './centre-create-or-connect-without-users.input';
import { CentreUpsertWithoutUsersInput } from './centre-upsert-without-users.input';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { CentreUpdateWithoutUsersInput } from './centre-update-without-users.input';

@InputType()
export class CentreUpdateOneRequiredWithoutUsersInput {

    @Field(() => CentreCreateWithoutUsersInput, {nullable:true})
    @Type(() => CentreCreateWithoutUsersInput)
    create?: CentreCreateWithoutUsersInput;

    @Field(() => CentreCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => CentreCreateOrConnectWithoutUsersInput)
    connectOrCreate?: CentreCreateOrConnectWithoutUsersInput;

    @Field(() => CentreUpsertWithoutUsersInput, {nullable:true})
    @Type(() => CentreUpsertWithoutUsersInput)
    upsert?: CentreUpsertWithoutUsersInput;

    @Field(() => CentreWhereUniqueInput, {nullable:true})
    @Type(() => CentreWhereUniqueInput)
    connect?: CentreWhereUniqueInput;

    @Field(() => CentreUpdateWithoutUsersInput, {nullable:true})
    @Type(() => CentreUpdateWithoutUsersInput)
    update?: CentreUpdateWithoutUsersInput;
}
