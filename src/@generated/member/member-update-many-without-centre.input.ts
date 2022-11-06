import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutCentreInput } from './member-create-without-centre.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutCentreInput } from './member-create-or-connect-without-centre.input';
import { MemberUpsertWithWhereUniqueWithoutCentreInput } from './member-upsert-with-where-unique-without-centre.input';
import { MemberCreateManyCentreInputEnvelope } from './member-create-many-centre-input-envelope.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithWhereUniqueWithoutCentreInput } from './member-update-with-where-unique-without-centre.input';
import { MemberUpdateManyWithWhereWithoutCentreInput } from './member-update-many-with-where-without-centre.input';
import { MemberScalarWhereInput } from './member-scalar-where.input';

@InputType()
export class MemberUpdateManyWithoutCentreInput {

    @Field(() => [MemberCreateWithoutCentreInput], {nullable:true})
    @Type(() => MemberCreateWithoutCentreInput)
    create?: Array<MemberCreateWithoutCentreInput>;

    @Field(() => [MemberCreateOrConnectWithoutCentreInput], {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutCentreInput)
    connectOrCreate?: Array<MemberCreateOrConnectWithoutCentreInput>;

    @Field(() => [MemberUpsertWithWhereUniqueWithoutCentreInput], {nullable:true})
    @Type(() => MemberUpsertWithWhereUniqueWithoutCentreInput)
    upsert?: Array<MemberUpsertWithWhereUniqueWithoutCentreInput>;

    @Field(() => MemberCreateManyCentreInputEnvelope, {nullable:true})
    @Type(() => MemberCreateManyCentreInputEnvelope)
    createMany?: MemberCreateManyCentreInputEnvelope;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    set?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    disconnect?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    delete?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberWhereUniqueInput], {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: Array<MemberWhereUniqueInput>;

    @Field(() => [MemberUpdateWithWhereUniqueWithoutCentreInput], {nullable:true})
    @Type(() => MemberUpdateWithWhereUniqueWithoutCentreInput)
    update?: Array<MemberUpdateWithWhereUniqueWithoutCentreInput>;

    @Field(() => [MemberUpdateManyWithWhereWithoutCentreInput], {nullable:true})
    @Type(() => MemberUpdateManyWithWhereWithoutCentreInput)
    updateMany?: Array<MemberUpdateManyWithWhereWithoutCentreInput>;

    @Field(() => [MemberScalarWhereInput], {nullable:true})
    @Type(() => MemberScalarWhereInput)
    deleteMany?: Array<MemberScalarWhereInput>;
}
