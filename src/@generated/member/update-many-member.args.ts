import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberUpdateManyMutationInput } from './member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemberWhereInput } from './member-where.input';

@ArgsType()
export class UpdateManyMemberArgs {

    @Field(() => MemberUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberUpdateManyMutationInput)
    data!: MemberUpdateManyMutationInput;

    @Field(() => MemberWhereInput, {nullable:true})
    @Type(() => MemberWhereInput)
    where?: MemberWhereInput;
}
