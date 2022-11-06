import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreWhereUniqueInput } from './centre-where-unique.input';
import { Type } from 'class-transformer';
import { CentreCreateWithoutMembersInput } from './centre-create-without-members.input';

@InputType()
export class CentreCreateOrConnectWithoutMembersInput {

    @Field(() => CentreWhereUniqueInput, {nullable:false})
    @Type(() => CentreWhereUniqueInput)
    where!: CentreWhereUniqueInput;

    @Field(() => CentreCreateWithoutMembersInput, {nullable:false})
    @Type(() => CentreCreateWithoutMembersInput)
    create!: CentreCreateWithoutMembersInput;
}
