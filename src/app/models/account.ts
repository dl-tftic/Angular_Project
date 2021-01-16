import { Address } from './address';
import { ContactInfo } from './contact-info';
import { Role } from './role';

export interface IAccount
{
    id: number;
    login: string;
    activate: boolean;
    lastName: string;
    firstName: string;
    password?: any;
    salt?: any;
    role: Role;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}
export class Account implements IAccount
{
    id: number;
    login: string;
    activate: boolean;
    lastName: string;
    firstName: string;
    password?: any;
    salt?: any;
    role: Role;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}
