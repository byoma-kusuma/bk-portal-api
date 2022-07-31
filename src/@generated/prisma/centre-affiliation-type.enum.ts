import { registerEnumType } from '@nestjs/graphql';

export enum CentreAffiliationType {
    None = "None",
    Nepal = "Nepal",
    UK = "UK",
    USA = "USA",
    Australia = "Australia",
    Thailand = "Thailand",
    Hetauda = "Hetauda",
    MahendraNagar = "MahendraNagar"
}


registerEnumType(CentreAffiliationType, { name: 'CentreAffiliationType', description: undefined })
