import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberGroupsCreateManyGroupInput } from './member-groups-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberGroupsCreateManyGroupInputEnvelope {

    @Field(() => [MemberGroupsCreateManyGroupInput], {nullable:false})
    @Type(() => MemberGroupsCreateManyGroupInput)
    data!: Array<MemberGroupsCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
