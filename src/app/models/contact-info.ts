export interface IContactInfo
{
    id: number;
    contactType: string;
    contactInformation: string;
    description?: string;
}

export class ContactInfo implements IContactInfo
{
    id: number;
    contactType: string;
    contactInformation: string;
    description?: string;
}
