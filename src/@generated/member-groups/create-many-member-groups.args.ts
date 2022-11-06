import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberGroupsCreateManyInput } from './member-groups-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemberGroupsArgs {

    @Field(() => [MemberGroupsCreateManyInput], {nullable:false})
    @Type(() => MemberGroupsCreateManyInput)
    data!: Array<MemberGroupsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
