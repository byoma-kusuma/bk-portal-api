import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Type } from 'class-transformer';
import { CentreCreateWithoutUsersInput } from './centre-create-without-users.input';

@InputType()
export class CentreCreateOrConnectWithoutUsersInput {

    @Field(() => CentreWhereUniqueInput, {nullable:false})
    @Type(() => CentreWhereUniqueInput)
    where!: CentreWhereUniqueInput;

    @Field(() => CentreCreateWithoutUsersInput, {nullable:false})
    @Type(() => CentreCreateWithoutUsersInput)
    create!: CentreCreateWithoutUsersInput;
}
