export interface ICountry {
    id: number;
    iso: string;
    name: string;
    iso3: string;
    numCode: number;
    phoneCode: number;
}

export class Country implements ICountry
{
    id: number;
    iso: string;
    name: string;
    iso3: string;
    numCode: number;
    phoneCode: number;
}
