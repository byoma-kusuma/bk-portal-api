import { Resolver } from "@nestjs/graphql";
import { EmailService } from "./email.service";

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}
}
