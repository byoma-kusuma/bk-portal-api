import { registerEnumType } from '@nestjs/graphql';

export enum Type {
    SYSTEM = "SYSTEM",
    DEFAULT = "DEFAULT"
}


registerEnumType(Type, { name: 'Type', description: undefined })
