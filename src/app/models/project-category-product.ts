import { Product } from './product';
import { Supplier } from './supplier';

export interface IProjectCategoryProduct
{
    projectCategoryId: number;
    product?: Product;
    code?: string;
    supplier?: Supplier;
}

export class ProjectCategoryProduct implements IProjectCategoryProduct
{
    projectCategoryId: number;
    product?: any;
    code?: string;
    supplier?: any;
}
