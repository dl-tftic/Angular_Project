import { Address } from './address';
import { Category } from './category';


export interface IProject
{
    id: number;
    name: string;
    code?: any;
    description?: any;
    createDate: Date;
    createBy: number;
    address: Address;
    categories: Category[];
}
export class Project implements IProject
{
    id: number;
    name: string;
    code?: any;
    description?: any;
    createDate: Date;
    createBy: number;
    address: Address;
    categories: Category[];
}












