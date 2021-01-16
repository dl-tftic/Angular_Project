export interface IRole
{
    id: number;
    role: string;
    description: string;
}

export class Role implements IRole
{
    id: number;
    role: string;
    description: string;
}
