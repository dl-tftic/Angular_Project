import { MaxLengthValidator } from '@angular/forms';
import { Address } from './address';
import { BaseClass } from './base-class';
import { ContactInfo } from './contact-info';
import { Project } from './project';
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
    role: Role;
    address: Address;
    contactInfos: ContactInfo[];
    createDate: Date;
    createBy: number;
}
