import { promise } from 'protractor';
import { Observable, Observer, PartialObserver } from 'rxjs';


export interface IBaseComponent
{
    getAll<U>(): Observable<U[]>;

    getById<U>(id: number): Observable<U>;

    insert<U>(arg: U): Observable<number>;

    delete(id: number): Observable<number>;
}

export class BaseComponent<T extends IBaseComponent, U>
{
    private button = 'Button';

    private service: T;

    public dataSource: U[];

    public displayedColumns: string[];

    private deleteReturn: number;

    constructor(columns: string[], private serv: T)
    {
        this.displayedColumns = columns;
        this.initListButton();

        this.service = serv;

        // this.dataSource = this.getAll();
        this.init();
    }

    public initListButton(): void
    {
        if (this.displayedColumns.includes(this.button)) {}
        else { this.displayedColumns.push(this.button); }
    }

    private getObserver(arg: U[]): PartialObserver<U[]>
    {
        return {
                next: x => { arg = x, console.log('Observer got a next value: ' + arg) },
                error: err => console.error('Observer got an error: ' + err),
                complete: () => console.log('Observer got a complete notification'),
                };
    }

    public async getAll(): Promise<U[]>
    {
        // this.service.getAll<U>().subscribe(x => { this.dataSource = x; console.log(x); } );
        let data = await this.service.getAll<U>().toPromise().then(x =>  this.dataSource = x);
        this.dataSource = data;
        return this.dataSource;
    }

    init(): void
    {
        this.getAll();
    }

    getById(id: number): U
    {
        let rtn: U;
        this.service.getById<U>(id).subscribe(x => rtn = x);

        return rtn;
        throw new Error('Method not implemented.');
    }

    public async insert(arg: U): Promise<number>
    {
        let rtn: number;
        let data = await this.service.insert<U>(arg).toPromise().then(x => rtn = x);
        this.init();
        return rtn;
        throw new Error('Method not implemented.');
    }

    public async delete(id: number): Promise<number>
    {
        // await this.service.delete(id).subscribe(
        //                                             x => this.deleteReturn  = x
        //                                         );
        await this.service.delete(id).toPromise().then(x => this.deleteReturn  = x);
        this.init();
        // console.log(this.deleteReturn);
        return this.deleteReturn;
        // return 0;
    }

}
