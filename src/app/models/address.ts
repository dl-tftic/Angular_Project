import { City } from './city';
import { Country } from './country';

export interface IAddress
{
    id: number;
    street: string;
    number: string;
    box?: string;
    city: City;
    country?: Country;
}

export class Address implements IAddress
{
    id: number;
    street: string;
    number: string;
    box?: string;
    city: City;
    country?: Country;

    constructor()
    {
        this.city = new City();
    }
}
