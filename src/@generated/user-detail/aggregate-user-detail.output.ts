import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserDetailCountAggregate } from './user-detail-count-aggregate.output';
import { UserDetailMinAggregate } from './user-detail-min-aggregate.output';
import { UserDetailMaxAggregate } from './user-detail-max-aggregate.output';

@ObjectType()
export class AggregateUserDetail {

    @Field(() => UserDetailCountAggregate, {nullable:true})
    _count?: UserDetailCountAggregate;

    @Field(() => UserDetailMinAggregate, {nullable:true})
    _min?: UserDetailMinAggregate;

    @Field(() => UserDetailMaxAggregate, {nullable:true})
    _max?: UserDetailMaxAggregate;
}
