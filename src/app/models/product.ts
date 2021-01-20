import { BaseClass } from './base-class';
import { Category } from './category';

export interface IProduct
{
    id: number;
    code?: string;
    manufacturer: string;
    name: string;
    model?: string;
    revision?: string;
    categories: Category[];
    description?: string;
    createDate: Date;
    createBy: number;
}
export class Product extends BaseClass implements IProduct
{
    protected static maxLength = new Map([
                                            ['code', 30],
                                            ['manufacturer', 80],
                                            ['name', 255],
                                            ['model', 80],
                                            ['revision', 10],
                                            ['description', 255]
                                        ]);

    protected static displayedColumn = [
                                            'id'
                                            , 'code'
                                            , 'manufacturer'
                                            , 'name'
                                            , 'model'
                                            , 'revision'
                                            , 'description'
                                        ];

    id: number;
    code?: string;
    manufacturer: string;
    name: string;
    model?: string;
    revision?: string;
    categories: Category[];
    description?: string;
    createDate: Date;
    createBy: number;
}
