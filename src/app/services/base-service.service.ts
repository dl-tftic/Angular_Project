import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector,  } from '@angular/core';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiAction } from '../api-action.enum';
import { ApiPaths } from '../api-paths.enum';
import { IBaseService } from '../models/base-component';
import { AppInjectorService } from './app-injector.service';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService implements IBaseService
{
  // tslint:disable-next-line: variable-name
  protected _url: string;

  protected http: HttpClient;

  protected snackBar: MatSnackBar;

  protected httpOptions =
  {
    headers: new HttpHeaders(
      {
      'Content-Type': 'application/json; charset=utf-8',
     }
    ),
  };

  constructor(path: ApiPaths)
  {
    this.SetPath(path);

    this.http = AppInjectorService.injector.get(HttpClient);

  }

  public GetUrl(): string
  {
    return this._url;
  }

  public GetUrlWithAction(action: string): string {
    return this.GetUrl() + action + '/';
  }

  public SetPath(path: ApiPaths): void
  {
    this._url = environment.baseUrl + path;
  }

  public getAll<T>(): Observable<T[]>
  {
    return this.http.get<T[]>(this.GetUrl() + ApiAction.GetAll);
  }

  public getById<T>(id: number): Observable<T>
  {
    return this.http
      .get<T>(this.GetUrlWithAction(ApiAction.GetById) + id)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  public insert<T>(arg: T): Observable<number>
  {
    const http$ = this.http
      .post<number>(
        this.GetUrlWithAction(ApiAction.Insert),
        JSON.stringify(arg),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandler));
    return http$;
  }

  public delete(id: number): Observable<number> {
    return this.http
      .delete<number>(this.GetUrlWithAction(ApiAction.Delete) + id)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  // tslint:disable-next-line: typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}
                      Name: ${error.name}
                      Message: ${error.message}
                      Error: ${error.error}`;
    }
    // console.log(this);
    console.log(errorMessage);
    return throwError(error.error);
  }

}
