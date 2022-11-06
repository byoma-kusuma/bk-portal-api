import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsScalarWhereInput } from './member-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { MemberGroupsUpdateManyMutationInput } from './member-groups-update-many-mutation.input';

@InputType()
export class MemberGroupsUpdateManyWithWhereWithoutMemberInput {

    @Field(() => MemberGroupsScalarWhereInput, {nullable:false})
    @Type(() => MemberGroupsScalarWhereInput)
    where!: MemberGroupsScalarWhereInput;

    @Field(() => MemberGroupsUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberGroupsUpdateManyMutationInput)
    data!: MemberGroupsUpdateManyMutationInput;
}
