import { BaseClass } from './base-class';

export interface IFile
{
    id?: number;
    name: string;
    fileName?: string;
    fileExension?: string;
    fileByte: any;
    fileSize?: number;
    fileLinkId?: any;
    description?: string;
    createDate?: Date;
    createBy: number;
}

export class File extends BaseClass implements IFile
{
    protected static maxLength = new Map([
                                            ['name', 50],
                                            ['description', 80]
                                        ]);

    protected static displayedColumn = [
                                            'id'
                                            , 'name'
                                            , 'fileName'
                                            , 'description'
                                        ];

    id?: number;
    name: string;
    fileName?: string;
    fileExension?: string;
    fileByte: any;
    fileSize?: number;
    fileLinkId?: any;
    description?: string;
    createDate?: Date;
    createBy: number;
}
