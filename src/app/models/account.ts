import { MaxLengthValidator } from '@angular/forms';
import { Address } from './address';
import { BaseClass } from './base-class';
import { ContactInfo } from './contact-info';
import { Project } from './project';
import { Roles } from './roles';

export interface IAccount
{
    id: number;
    login: string;
    activate: boolean;
    lastName: string;
    firstName: string;
    password?: any;
    salt?: any;
    role: Roles;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}

export class Account extends BaseClass implements IAccount
{
    protected static maxLength = new Map([
                                            ['login', 50],
                                            ['lastName', 80],
                                            ['firstName', 80]
                                        ]);

    protected static displayedColumn = [
                                            'id'
                                            , 'login'
                                            , 'firstName'
                                            , 'lastName'
                                            , 'activate'
                                        ];

    id: number;
    login: string;
    activate: boolean;
    lastName: string;
    firstName: string;
    password?: any;
    salt?: any;
    role: Roles;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;

    constructor()
    {
        super();

        this.role = new Roles();
        this.address = new Address();
    }
}
