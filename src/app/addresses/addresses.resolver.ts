import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { AddressService } from "./addresses.service";
import { Address } from "./entities/address.entity";
import { UpdateAddressInput } from "./dto/update-address.input";
import { GqlAuthGuard } from "../auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { AddressCreateInput } from "../../@generated/address/address-create.input";

@Resolver(() => Address)
@UseGuards(GqlAuthGuard)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Mutation(() => Address)
  createCentre(
    @Args("createAddressInput") createAddressInput: AddressCreateInput
  ) {
    return this.addressService.create(createAddressInput);
  }

  @Query(() => [Address], { name: "addresses" })
  findAll() {
    return this.addressService.findAll();
  }

  @Query(() => Address, { name: "address" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.addressService.findOne(id);
  }

  @Mutation(() => Address)
  updateAddress(
    @Args("updateAddressInput") updateAddressInput: UpdateAddressInput
  ) {
    return this.addressService.update(
      updateAddressInput.id,
      updateAddressInput
    );
  }

  @Mutation(() => Address)
  removeAddress(@Args("id", { type: () => Int }) id: number) {
    return this.addressService.remove(id);
  }
}
