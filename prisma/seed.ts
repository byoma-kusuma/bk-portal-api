import { PrismaClient, Type } from "@prisma/client";
import { SystemRoleTypes } from "../src/common/constants/global-constants";
import createAvatar from "../src/common/utils/avatar";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  await prisma.member.deleteMany();

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
