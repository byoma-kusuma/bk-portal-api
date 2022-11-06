import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CentreUpdateWithoutUsersInput } from './centre-update-without-users.input';
import { Type } from 'class-transformer';
import { CentreCreateWithoutUsersInput } from './centre-create-without-users.input';

@InputType()
export class CentreUpsertWithoutUsersInput {

    @Field(() => CentreUpdateWithoutUsersInput, {nullable:false})
    @Type(() => CentreUpdateWithoutUsersInput)
    update!: CentreUpdateWithoutUsersInput;

    @Field(() => CentreCreateWithoutUsersInput, {nullable:false})
    @Type(() => CentreCreateWithoutUsersInput)
    create!: CentreCreateWithoutUsersInput;
}
