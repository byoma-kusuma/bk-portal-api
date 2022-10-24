import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateManyCentreInput } from './member-create-many-centre.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberCreateManyCentreInputEnvelope {

    @Field(() => [MemberCreateManyCentreInput], {nullable:false})
    @Type(() => MemberCreateManyCentreInput)
    data!: Array<MemberCreateManyCentreInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
