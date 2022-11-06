import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutCentreInput } from './member-create-without-centre.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutCentreInput } from './member-create-or-connect-without-centre.input';
import { MemberCreateManyCentreInputEnvelope } from './member-create-many-centre-input-envelope.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';

@InputType()
export class MemberCreateNestedManyWithoutCentreInput {

    @Field(() => [MemberCreateWithoutCentreInput], {nullable:true})
    @Type(() => MemberCreateWithoutCentreInput)
    create?: Array<MemberCreateWithoutCentreInput>;

    @Field(() => [MemberCreateOrConnectWithoutCentreInput], {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutCentreInput)
    connectOrCreate?: Array<MemberCreateOrConnectWithoutCentreInput>;

    @Field(() => MemberCreateManyCentreInputEnvelope, {nullable:true})
    @Type(() => MemberCreateManyCentreInputEnvelope)
    createMany?: MemberCreateManyCentreInputEnvelope;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: Array<MemberWhereUniqueInput>;
}
