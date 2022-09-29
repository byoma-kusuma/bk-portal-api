import { registerEnumType } from '@nestjs/graphql';

export enum CentreScalarFieldEnum {
    id = "id",
    name = "name",
    displayText = "displayText",
    displaySequence = "displaySequence",
    streetAddress = "streetAddress",
    city = "city",
    stateProvince = "stateProvince",
    country = "country"
}


registerEnumType(CentreScalarFieldEnum, { name: 'CentreScalarFieldEnum', description: undefined })
