import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberCreateWithoutUserInput } from './member-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberCreateOrConnectWithoutUserInput } from './member-create-or-connect-without-user.input';
import { MemberUpsertWithoutUserInput } from './member-upsert-without-user.input';
import { MemberWhereUniqueInput } from './member-where-unique.input';
import { MemberUpdateWithoutUserInput } from './member-update-without-user.input';

@InputType()
export class MemberUpdateOneWithoutUserInput {

    @Field(() => MemberCreateWithoutUserInput, {nullable:true})
    @Type(() => MemberCreateWithoutUserInput)
    create?: MemberCreateWithoutUserInput;

    @Field(() => MemberCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => MemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput;

    @Field(() => MemberUpsertWithoutUserInput, {nullable:true})
    @Type(() => MemberUpsertWithoutUserInput)
    upsert?: MemberUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MemberWhereUniqueInput, {nullable:true})
    @Type(() => MemberWhereUniqueInput)
    connect?: MemberWhereUniqueInput;

    @Field(() => MemberUpdateWithoutUserInput, {nullable:true})
    @Type(() => MemberUpdateWithoutUserInput)
    update?: MemberUpdateWithoutUserInput;
}
