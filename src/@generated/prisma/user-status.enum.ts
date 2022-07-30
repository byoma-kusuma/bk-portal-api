import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    VALIDATED = "VALIDATED",
    VALIDATION_PENDING = "VALIDATION_PENDING"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
