import { ProjectCategoryProduct } from './project-category-product';

export interface ICategory
{
    projectCategoryProducts?: ProjectCategoryProduct[];
    subCategories?: any[];
    files?: File[];
    parentCategoryTypeId?: number;
    id?: number;
    name: string;
    description?: string;
    type?: string;
    createDate?: Date;
    createBy?: number;
}

export class Category implements ICategory
{
    projectCategoryProducts?: ProjectCategoryProduct[];
    subCategories?: any[];
    files?: File[];
    parentCategoryTypeId?: number;
    id?: number;
    name: string;
    description?: string;
    type?: string;
    createDate?: Date;
    createBy?: number;
}
