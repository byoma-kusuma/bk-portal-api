import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent
} from "@nestjs/graphql";
import { AbhisekhaService } from "./abhisekha.service";
import { Abhisekha } from "./entities/abhisekha.entity";
import { CreateAbhisekhaInput } from "./dto/create-abhisekha.input";
import { UpdateAbhisekhaInput } from "./dto/update-abhisekha.input";
import { Member } from "../member/entities/member.entity";

@Resolver(() => Abhisekha)
export class AbhisekhaResolver {
  constructor(private readonly abhisekhaService: AbhisekhaService) {}

  @Mutation(() => Abhisekha) createAbhisekha(
    @Args("createAbhisekhaInput") createAbhisekhaInput: CreateAbhisekhaInput
  ) {
    return this.abhisekhaService.create(createAbhisekhaInput);
  }

  @Query(() => [Abhisekha], { name: "abhisekhas" })
  findAll() {
    return this.abhisekhaService.findAll();
  }

  @Query(() => Abhisekha, { name: "abhisekha" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.abhisekhaService.findOne(id);
  }

  @Mutation(() => Abhisekha)
  updateAbhisekha(
    @Args("updateAbhisekhaInput") updateAbhisekhaInput: UpdateAbhisekhaInput
  ) {
    return this.abhisekhaService.update(
      updateAbhisekhaInput.id,
      updateAbhisekhaInput
    );
  }

  @Mutation(() => Abhisekha)
  removeAbhisekha(@Args("id", { type: () => Int }) id: number) {
    return this.abhisekhaService.remove(id);
  }

  @ResolveField(() => [Member])
  async members(@Parent() abhisekha: Abhisekha) {
    const abhisekhaMemberRelation = await this.abhisekhaService.findUnique({
      where: { id: abhisekha.id },
      select: {
        id: true,
        memberAbhisekha: {
          select: {
            member: true,
            abhisekhaDate: true,
            abhisekhaPlace: true,
            type: true
          }
        }
      }
    });

    if (!abhisekhaMemberRelation) return null;
    return abhisekhaMemberRelation.memberAbhisekha.map(
      (memberRelation) => memberRelation
    );
  }
}

// @ObjectType()
// class MemberAndMemberAbhisekha extends Member {
//   memberAbhisekha: Pick<
//     MemberAbhisekha,
//     "abhisekhaDate" | "abhisekhaPlace" | "type"
//   >;
// }
