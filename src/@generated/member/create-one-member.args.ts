import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberCreateInput } from './member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberArgs {

    @Field(() => MemberCreateInput, {nullable:false})
    @Type(() => MemberCreateInput)
    data!: MemberCreateInput;
}
