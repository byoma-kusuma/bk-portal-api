import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MemberGroupsScalarWhereInput {

    @Field(() => [MemberGroupsScalarWhereInput], {nullable:true})
    AND?: Array<MemberGroupsScalarWhereInput>;

    @Field(() => [MemberGroupsScalarWhereInput], {nullable:true})
    OR?: Array<MemberGroupsScalarWhereInput>;

    @Field(() => [MemberGroupsScalarWhereInput], {nullable:true})
    NOT?: Array<MemberGroupsScalarWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    memberId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;
}
