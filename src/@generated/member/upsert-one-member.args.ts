import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';
import { MemberCreateInput } from './member-create.input';
import { MemberUpdateInput } from './member-update.input';

@ArgsType()
export class UpsertOneMemberArgs {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;

    @Field(() => MemberCreateInput, {nullable:false})
    @Type(() => MemberCreateInput)
    create!: MemberCreateInput;

    @Field(() => MemberUpdateInput, {nullable:false})
    @Type(() => MemberUpdateInput)
    update!: MemberUpdateInput;
}
