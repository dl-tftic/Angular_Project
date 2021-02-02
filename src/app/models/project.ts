import { Address } from './address';
import { BaseClass } from './base-class';
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
export class Project extends BaseClass implements IProject
{
    protected static maxLength = new Map([
                                            ['code', 30],
                                            ['name', 255],
                                            ['description', 255]
                                        ]);

    protected static displayedColumn = [
                                            'id'
                                            , 'code'
                                            , 'name'
                                            , 'description'
                                        ];

    constructor()
    {
        super();
        this.address = new Address();
    }

    id: number;
    name: string;
    code?: any;
    description?: any;
    createDate: Date;
    createBy: number;
    address: Address;
    categories: Category[];
}












