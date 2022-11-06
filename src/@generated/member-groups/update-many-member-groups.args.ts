import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsUpdateManyMutationInput } from './member-groups-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MemberGroupsWhereInput } from './member-groups-where.input';

@ArgsType()
export class UpdateManyMemberGroupsArgs {

    @Field(() => MemberGroupsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberGroupsUpdateManyMutationInput)
    data!: MemberGroupsUpdateManyMutationInput;

    @Field(() => MemberGroupsWhereInput, {nullable:true})
    @Type(() => MemberGroupsWhereInput)
    where?: MemberGroupsWhereInput;
}
