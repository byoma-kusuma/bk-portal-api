import { registerEnumType } from '@nestjs/graphql';

export enum GenderType {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
    PREFER_NOT_TO_SAY = "PREFER_NOT_TO_SAY"
}


registerEnumType(GenderType, { name: 'GenderType', description: undefined })
