import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import createAvatar from "../../common/utils/avatar";
import { EmailService } from "../email/email.service";
import { GroupsService } from "../groups/groups.service";
import { CreateMemberInput } from "./dto/create-member.input";
import { SendEmailInput } from "./dto/send-email.input";
import { UpdateMemberInput } from "./dto/update-member.input";

@Injectable()
export class MembersService {
  findUnique = this.prisma.member.findUnique;

  constructor(
    private readonly prisma: PrismaService,

    @Inject(forwardRef(() => GroupsService))
    private readonly groupService: GroupsService,
    private readonly emailService: EmailService
  ) {}

  /**
   * @param  {CreateMemberInput} createMemberInput
   * Modifies in following tables:
   * 1) Member (create)
   * 2) MemberGroup (create)
   * 3) MemberAbhisekha (create)
   */
  async create(createMemberInput: CreateMemberInput) {
    const {
      groupIds,
      memberAbhisekhaDetails,
      currentStreetAddress,
      permanentStreetAddress,
      currentCity,
      permanentCity,
      currentStateProvince,
      permanentStateProvince,
      currentCountry,
      permanentCountry,
      centreId,
      ...createMemberArgs
    } = createMemberInput;

    const member = this.prisma.member.create({
      data: {
        ...createMemberArgs,
        photo: createAvatar(),
        centre: {
          connect: {
            id: centreId
          }
        },
        currentAddress: {
          create: {
            country: currentCountry,
            street: currentStreetAddress,
            city: currentCity,
            stateProvince: currentStateProvince
          }
        },
        permanentAddress: {
          create: {
            country: permanentCountry,
            street: permanentStreetAddress,
            city: permanentCity,
            stateProvince: permanentStateProvince
          }
        },
        ...(groupIds
          ? {
              memberGroup: {
                create: groupIds.map((groupId) => ({
                  group: { connect: { id: groupId } }
                }))
              }
            }
          : {}),
        ...(memberAbhisekhaDetails
          ? {
              memberAbhisekha: {
                create: memberAbhisekhaDetails.map(
                  ({ abhisekhaDate, abhisekhaPlace, abhisekhaId, type }) => ({
                    abhisekha: { connect: { id: abhisekhaId } },
                    type,
                    abhisekhaDate,
                    abhisekhaPlace
                  })
                )
              }
            }
          : {})
      }
    });

    return member;
  }

  findAll() {
    return this.prisma.member.findMany({
      where: {
        isDeleted: false
      }
    });
  }

  async findOne(id: number) {
    const member = await this.prisma.member.findFirst({
      where: {
        id,
        isDeleted: false
      }
    });

    return member;
  }
  /**
   * @param  {number} id
   * @param  {UpdateMemberInput} updateMemberInput
   * Modifies in following tables
   * 1) Member (update)
   * 2) MemberGroup (update, create, delete)
   * 3) MemberAbhisekha (update, create, delete)
   */
  async update(id: number, updateMemberInput: UpdateMemberInput) {
    const {
      groupIds,
      memberAbhisekhaDetails,
      currentStreetAddress,
      permanentStreetAddress,
      currentCity,
      permanentCity,
      currentStateProvince,
      permanentStateProvince,
      currentCountry,
      permanentCountry,
      centreId,
      id: _,
      ...updateMemberArgs
    } = updateMemberInput;

    return this.prisma.member.update({
      data: {
        ...updateMemberArgs,
        centre: {
          connect: {
            id: centreId
          }
        },
        currentAddress: {
          update: {
            country: currentCountry,
            street: currentStreetAddress,
            city: currentCity,
            stateProvince: currentStateProvince
          }
        },
        permanentAddress: {
          create: {
            country: permanentCountry,
            street: permanentStreetAddress,
            city: permanentCity,
            stateProvince: permanentStateProvince
          }
        },
        ...(groupIds && {
          groups: {
            upsert: groupIds.map((groupId) => ({
              where: {
                memberId_groupId: { memberId: id, groupId }
              },
              update: {},
              create: { group: { connect: { id: groupId } } }
            })),
            deleteMany: {
              memberId: id,
              groupId: { notIn: groupIds }
            }
          }
        }),
        ...(memberAbhisekhaDetails
          ? {
              memberAbhisekha: {
                upsert: memberAbhisekhaDetails.map(
                  ({ abhisekhaDate, abhisekhaId, abhisekhaPlace, type }) => ({
                    where: {
                      memberId_abhisekhaId: {
                        memberId: id,
                        abhisekhaId: abhisekhaId
                      }
                    },
                    update: {
                      abhisekhaDate,
                      abhisekhaPlace,
                      type
                    },
                    create: {
                      abhisekha: {
                        connect: {
                          id: abhisekhaId
                        }
                      },
                      abhisekhaDate,
                      abhisekhaPlace,
                      type
                    }
                  })
                ),
                deleteMany: {
                  memberId: id,
                  abhisekhaId: {
                    notIn: memberAbhisekhaDetails.map(
                      ({ abhisekhaId }) => abhisekhaId
                    )
                  }
                }
              }
            }
          : {})
      },
      where: {
        id
      }
    });
  }

  async remove(id: number, myId: number) {
    const member = await this.prisma.member.findUnique({
      where: { id },
      include: { user: true }
    });

    if (!member || member.isDeleted) {
      throw new NotFoundException(
        "Member not found or has been deleted already"
      );
    }

    if (myId === member.id) {
      throw new InternalServerErrorException("Cannot delete yourself!");
    }

    const deleteMemberOperation = this.prisma.member.update({
      where: { id },
      data: { isDeleted: true }
    });

    // if member has user, run soft delete queries on transaction
    if (member.user) {
      const deleteUserOperation = this.prisma.user.update({
        where: { id: member.user.id },
        data: {
          isDeleted: true
        }
      });

      await this.prisma.$transaction([
        deleteMemberOperation,
        deleteUserOperation
      ]);
    } else {
      // else just soft delete the member
      await deleteMemberOperation;
    }
    return member;
  }

  sendEmail(sendEmailInput: SendEmailInput) {
    this.emailService.sendMail({
      to: sendEmailInput.memberEmails,
      subject: sendEmailInput.subject,
      html: sendEmailInput.content,
      // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/63398
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      attachDataUrls: true
    });
  }

  async filterValidMembers(memberIds: Array<number>): Promise<Array<number>> {
    const members = await this.prisma.member.findMany({
      where: {
        id: {
          in: memberIds
        }
      },
      select: {
        id: true,
        isDeleted: true
      }
    });

    return members
      .filter((group) => !group.isDeleted)
      .map(({ id, ...rest }) => id);
  }
}
