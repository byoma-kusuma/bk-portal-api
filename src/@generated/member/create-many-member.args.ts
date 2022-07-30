import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberCreateManyInput } from './member-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMemberArgs {

    @Field(() => [MemberCreateManyInput], {nullable:false})
    @Type(() => MemberCreateManyInput)
    data!: Array<MemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
