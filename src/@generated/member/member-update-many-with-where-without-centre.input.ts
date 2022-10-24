import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberScalarWhereInput } from './member-scalar-where.input';
import { Type } from 'class-transformer';
import { MemberUpdateManyMutationInput } from './member-update-many-mutation.input';

@InputType()
export class MemberUpdateManyWithWhereWithoutCentreInput {

    @Field(() => MemberScalarWhereInput, {nullable:false})
    @Type(() => MemberScalarWhereInput)
    where!: MemberScalarWhereInput;

    @Field(() => MemberUpdateManyMutationInput, {nullable:false})
    @Type(() => MemberUpdateManyMutationInput)
    data!: MemberUpdateManyMutationInput;
}
