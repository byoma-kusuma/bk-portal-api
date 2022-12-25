import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MemberSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    yearOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    centreId?: true;

    @Field(() => Boolean, {nullable:true})
    currentAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    permanentAddressId?: true;
}
