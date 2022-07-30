import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberUpdateInput } from './member-update.input';
import { Type } from 'class-transformer';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@ArgsType()
export class UpdateOneMemberArgs {

    @Field(() => MemberUpdateInput, {nullable:false})
    @Type(() => MemberUpdateInput)
    data!: MemberUpdateInput;

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;
}
