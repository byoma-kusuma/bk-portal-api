import { PrismaClient, Type } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();

  const adminRole = await prisma.role.create({
    data: {
      name: "ADMIN",
      roleType: Type.SYSTEM
    }
  });

  await prisma.role.create({
    data: {
      name: "DEFAULT",
      roleType: Type.SYSTEM
    }
  });

  await prisma.role.create({
    data: {
      name: "SANGHA_MEMBER",
      roleType: Type.SYSTEM
    }
  });

  console.log("Seeding...");

  const user1 = await prisma.user.create({
    data: {
      userName: "lisa@simpson.com",
      email: "lisa@simpson.com",
      firstName: "Lisa",
      lastName: "Simpson",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
      role: {
        connect: {
          name: adminRole.name
        }
      },
      status: "VALIDATED"
    }
  });
  const user2 = await prisma.user.create({
    data: {
      userName: "bart@simpson.com",
      email: "bart@simpson.com",
      firstName: "Bart",
      lastName: "Simpson",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42F
      role: {
        connect: {
          name: adminRole.name
        }
      },
      status: "VALIDATED"
    }
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
