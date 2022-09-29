import { PrismaClient, Type } from "@prisma/client";
import { SystemRoleTypes } from "../src/common/constants/global-constants";
import createAvatar from "../src/common/utils/avatar";

const prisma = new PrismaClient();

async function main() {
  await prisma.memberGroups.deleteMany();
  await prisma.group.deleteMany();
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  await prisma.member.deleteMany();
  await prisma.centre.deleteMany();


  const nepalCentre = await prisma.centre.create({
    data: {
      name: "Bishal Nagar",
      displayText: "Bishal Nagar - Kathmandu",
      displaySequence: 1,
      streetAddress: "Bishal Nagar",
      city: "Kathmandu",
      stateProvince: "Bagmati",
      country: "Nepal"
    }
  });

  console.log({ nepalCentre });

  const ukCentre = await prisma.centre.create({
    data: {
      name: "U.K.",
      displayText: "United Kingdom (UK)",
      displaySequence: 2,
      streetAddress: "",
      city: "Ruislip",
      stateProvince: "Middlesex",
      country: "UK"
    }
  });
  console.log({ ukCentre });

  const usCentre = await prisma.centre.create({
    data: {
      name: "U.S.",
      displayText: "United States (USA)",
      displaySequence: 3,
      streetAddress: "13342 Regal Crest Drive",
      city: "Clifton",
      stateProvince: "Virginia",
      country: "USA"
    }
  });
  console.log({ usCentre });

  const adminRole = await prisma.role.create({
    data: {
      name: SystemRoleTypes.ADMIN,
      roleType: Type.SYSTEM
    }
  });

  await prisma.role.create({
    data: {
      name: SystemRoleTypes.DEFAULT,
      roleType: Type.SYSTEM
    }
  });

  const user1 = await prisma.member.create({
    data: {
      firstName: "Lisa",
      lastName: "Simpson",
      email: "lisa@simpson.com",
      isMember: true,
      centerAffiliation: "Nepal",
      photo: createAvatar(),
      centreId: nepalCentre.id,
      user: {
        create: {
          userName: "lisa@simpson.com",
          avatar: createAvatar(),
          password:
            "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
          role: {
            connect: {
              name: adminRole.name
            }
          },
          status: "VALIDATED"
        }
      }
    }
  });

  const user2 = await prisma.member.create({
    data: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      isMember: true,
      centerAffiliation: "Nepal",
      photo: createAvatar(),
      centreId: ukCentre.id,
      user: {
        create: {
          userName: "bart@simpson.com",
          avatar: createAvatar(),
          password:
            "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
          role: {
            connect: {
              name: adminRole.name
            }
          },
          status: "VALIDATED"
        }
      }
    }
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
