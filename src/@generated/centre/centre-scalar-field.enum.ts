import { registerEnumType } from '@nestjs/graphql';

export enum CentreScalarFieldEnum {
    id = "id",
    name = "name",
    displayText = "displayText",
    displaySequence = "displaySequence",
    streetAddress = "streetAddress",
    city = "city",
    stateProvince = "stateProvince",
    country = "country",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    uniqueKey = "uniqueKey",
    updatedBy = "updatedBy",
    createdBy = "createdBy"
}


registerEnumType(CentreScalarFieldEnum, { name: 'CentreScalarFieldEnum', description: undefined })
