import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CentreService } from "./centre.service";
import { Centre } from "./entities/centre.entity";
import { CreateCentreInput } from "./dto/create-centre.input";
import { UpdateCentreInput } from "./dto/update-centre.input";
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";

@Resolver(() => Centre)
@UseGuards(GqlAuthGuard)
export class CentreResolver {
  constructor(private readonly centreService: CentreService) {}

  @Mutation(() => Centre)
  createCentre(
    @Args("createCentreInput") createCentreInput: CreateCentreInput
  ) {
    return this.centreService.create(createCentreInput);
  }

  @Query(() => [Centre], { name: "centres" })
  findAll() {
    return this.centreService.findAll();
  }

  @Query(() => Centre, { name: "centre" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.centreService.findOne(id);
  }

  @Mutation(() => Centre)
  updateCentre(
    @Args("updateCentreInput") updateCentreInput: UpdateCentreInput
  ) {
    return this.centreService.update(updateCentreInput.id, updateCentreInput);
  }

  @Mutation(() => Centre)
  removeCentre(@Args("id", { type: () => Int }) id: number) {
    return this.centreService.remove(id);
  }
}
