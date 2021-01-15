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

export class File implements IFile
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
