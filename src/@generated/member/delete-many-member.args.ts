import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberWhereInput } from './member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemberArgs {

    @Field(() => MemberWhereInput, {nullable:true})
    @Type(() => MemberWhereInput)
    where?: MemberWhereInput;
}
