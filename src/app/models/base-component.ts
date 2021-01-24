import { promise } from 'protractor';
import { Observable, Observer, PartialObserver } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AppInjectorService } from '../services/app-injector.service';


export interface IBaseService
{
    getAll<U>(): Observable<U[]>;

    getById<U>(id: number): Observable<U>;

    insert<U>(arg: U): Observable<number>;

    delete(id: number): Observable<number>;
}

export class BaseComponent<T extends IBaseService, U>
{
    private button = 'Button';

    private service: T;

    public dataSource: U[];

    private genericType: U;

    public displayedColumns: string[];

    private deleteReturn: number;

    protected snackBar: MatSnackBar;

    constructor(columns: string[], private serv: T)
    {
        this.displayedColumns = columns;
        this.initListButton();

        this.service = serv;

        // this.dataSource = this.getAll();
        // this.init();
    }

    public initListButton(): void
    {
        if (this.displayedColumns.includes(this.button)) {}
        else { this.displayedColumns.push(this.button); }
    }

    protected initSnackBar(): void
    {
        this.snackBar = AppInjectorService.injector.get(MatSnackBar);
    }

    public openSnackBar(message: string): void
    {
        const verticalPosition: MatSnackBarVerticalPosition = 'top';
        const horizontalPosition: MatSnackBarHorizontalPosition = 'center';

        const config = new MatSnackBarConfig();
        config.duration = 50000;
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.panelClass = 'snackClass';

        this.initSnackBar();
        this.snackBar.open(message, 'Close', config );
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

    async getById(id: number): Promise<U>
    {
        // this.getById2(id);
        // this.syncGetById(id).finally(() => this.genericType);
        // return this.genericType;
        return await this.service.getById<U>(id). toPromise().then(x => this.genericType = x);
        // throw new Error('Method not implemented.');
    }

    public async insert(arg: U): Promise<number>
    {
        let rtn: number;
        let data = await this.service.insert<U>(arg).toPromise().then(x => rtn = x);
        // this.init();
        return rtn;
        throw new Error('Method not implemented.');
    }

    public async delete(id: number): Promise<number>
    {
        try
        {
            // await this.service.delete(id).subscribe(
            //                                             x => this.deleteReturn  = x
            //                                         );
            await this.service.delete(id).toPromise().then(x => this.deleteReturn  = x);
            // this.init();
            // console.log(this.deleteReturn);
            return this.deleteReturn;
            // return 0;
        }
        catch (error)
        {
            // this.snackBar.open('Message archived');
            this.openSnackBar(error);
            console.log(this);
            console.log('try catch component ' + error);
        }
    }

    public deleteWithInit(id: number)
    {
        try
        {
            let rtn = this.delete(id).finally(() => this.init());
            return rtn;
        }
        catch (error)
        {
            console.log('try catch' + error);
        }
    }

}
