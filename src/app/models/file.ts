import { BaseClass } from './base-class';

export interface IFile
{
    id: number;
    name: string;
    fileName: string;
    fileExension: string;
    fileByte?: any;
    fileSize: number;
    fileLinkId?: any;
    description?: string;
    createDate: Date;
    createBy: number;
}

export class File extends BaseClass implements IFile
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
    name: string;
    fileName: string;
    fileExension: string;
    fileByte?: any;
    fileSize: number;
    fileLinkId?: any;
    description?: string;
    createDate: Date;
    createBy: number;
}
