import { Controller, Get } from "@nestjs/common";
import { ReportsService } from "./reports.service";

@Controller("reports")
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get("memberActivities")
  getMemberActivities() {
    return this.reportsService.getMemberActivities();
  }

  @Get("memberCentres")
  getMemberByCentres() {
    return this.reportsService.getMemberByCentres();
  }
}
