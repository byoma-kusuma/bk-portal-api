import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

type MemberByCreatedDateQueryReturn = Array<{
  day: string;
  members: Array<number>;
}>;

type MemberByCentres = Array<{
  centreId: number;
  centreName: string;
  memberCount: number;
}>;

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getMemberActivities() {
    const memberByCreatedDate: MemberByCreatedDateQueryReturn = await this
      .prisma.$queryRaw`
        WITH calendar AS (
          SELECT DATE_TRUNC('day', (CURRENT_DATE - INTERVAL '3 month')::DATE + offs) AS day
          FROM generate_series(0, 90, 1) AS offs
        )
        SELECT calendar.day, COALESCE(regexp_split_to_array(STRING_AGG(CAST("Member".id AS TEXT), ','), ','), '{}') AS members
        FROM calendar
        LEFT JOIN "Member" ON DATE_TRUNC('day', "Member"."createdAt") = calendar.day
        GROUP BY calendar.day
        ORDER BY calendar.day
    `;
    return memberByCreatedDate;
  }

  async getMemberByCentres() {
    const memberByCentres: MemberByCentres = await this.prisma.$queryRaw`
        SELECT
            c.id AS "centreId",
            c.name AS "centreName",
            COUNT(m.id) AS "memberCount"
        FROM
            "Centre" c
        LEFT JOIN
            "Member" m ON c.id = m."centreId"
        WHERE
            m."isDeleted" = false
            AND m.active = true
        GROUP BY
            c.id, c.name
        ORDER BY
            c.name; 
    `;
    return memberByCentres;
  }
}
