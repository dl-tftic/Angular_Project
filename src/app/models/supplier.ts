import { Address } from './address';
import { ContactInfo } from './contact-info';

export interface ISupplier
{
    id: number;
    name: string;
    description?: string;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}



export class Supplier implements ISupplier
{
    id: number;
    name: string;
    description?: string;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}

