import { City } from './city';

export interface IAddress
{
    id: number;
    street: string;
    number: string;
    box?: string;
    city: City;
    country?: any;
}

export class Address implements IAddress
{
    id: number;
    street: string;
    number: string;
    box?: string;
    city: City;
    country?: any;
}
