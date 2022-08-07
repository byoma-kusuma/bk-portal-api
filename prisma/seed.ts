import { PrismaClient, Type } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  await prisma.member.deleteMany();

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

  const user1 = await prisma.member.create({
    data: {
      firstName: "Lisa",
      lastName: "Simpson",
      email: "lisa@simpson.com",
      isMember: true,
      centerAffiliation: "Nepal",
      photo: `https://avatars.dicebear.com/api/avataaars/${
        Math.random() * 100000
      }.svg`,
      user: {
        create: {
          userName: "lisa@simpson.com",
          email: "lisa@simpson.com",
          avatar: `https://avatars.dicebear.com/api/avataaars/${
            Math.random() * 100000
          }.svg`,
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
      photo: `https://avatars.dicebear.com/api/avataaars/${
        Math.random() * 100000
      }.svg`,
      user: {
        create: {
          userName: "bart@simpson.com",
          email: "bart@simpson.com",
          avatar: `https://avatars.dicebear.com/api/avataaars/${
            Math.random() * 100000
          }.svg`,
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
