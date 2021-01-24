import { Country } from './country';

export interface ICity
{
    id: number;
    country: Country;
    code: string;
    city: string;
}

export class City implements ICity
{
    id: number;
    country: Country;
    code: string;
    city: string;

    constructor()
    {
        this.country = new Country();
    }
}
