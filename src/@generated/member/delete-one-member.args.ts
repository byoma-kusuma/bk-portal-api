import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMemberArgs {

    @Field(() => MemberWhereUniqueInput, {nullable:false})
    @Type(() => MemberWhereUniqueInput)
    where!: MemberWhereUniqueInput;
}
