import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreUpdateWithoutMembersInput } from './centre-update-without-members.input';
import { Type } from 'class-transformer';
import { CentreCreateWithoutMembersInput } from './centre-create-without-members.input';

@InputType()
export class CentreUpsertWithoutMembersInput {

    @Field(() => CentreUpdateWithoutMembersInput, {nullable:false})
    @Type(() => CentreUpdateWithoutMembersInput)
    update!: CentreUpdateWithoutMembersInput;

    @Field(() => CentreCreateWithoutMembersInput, {nullable:false})
    @Type(() => CentreCreateWithoutMembersInput)
    create!: CentreCreateWithoutMembersInput;
}
