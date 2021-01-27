import { BaseClass } from './base-class';
import { ProjectCategoryProduct } from './project-category-product';

export interface ICategory
{
    projectCategoryProducts?: ProjectCategoryProduct[];
    subCategories?: Category[];
    files?: File[];
    parentCategoryTypeId?: number;
    id?: number;
    name: string;
    description?: string;
    type?: string;
    createDate?: Date;
    createBy?: number;
}

export class Category extends BaseClass implements ICategory
{
    protected static maxLength = new Map([
                                            ['name', 80],
                                            ['type', 50],
                                            ['description', 255]
                                        ]);

    protected static displayedColumn = [
                                            'id'
                                            , 'name'
                                            , 'type'
                                            , 'description'
                                        ];

    projectCategoryProducts?: ProjectCategoryProduct[];
    subCategories?: Category[];
    files?: File[];
    parentCategoryTypeId?: number;
    id?: number;
    name: string;
    description?: string;
    type?: string;
    createDate?: Date;
    createBy?: number;
}
