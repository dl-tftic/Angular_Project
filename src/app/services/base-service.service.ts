import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiAction } from '../api-action.enum';
import { ApiPaths } from '../api-paths.enum';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService
{

  // tslint:disable-next-line: variable-name
  protected _url: string;

  private httpCl: HttpClient;

  protected httpOptions =
  {
    headers: new HttpHeaders(
    {
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(path: ApiPaths, httpClient: HttpClient)
  {
    this.SetPath(path);

    this.httpCl = httpClient;
  }

  public GetUrl(): string
  {
    return this._url;
  }

  public GetUrlWithAction(action: string): string
  {
    return this.GetUrl() + action + '/';
  }

  public SetPath(path: ApiPaths): void
  {
    this._url = environment.baseUrl + path;
  }

  public getAll<T>(): Observable<T[]>
  {
    return this.httpCl.get<T[]>(this.GetUrl() + ApiAction.GetAll);
  }

  public getById<T>(id: number): Observable<T>
  {
    return this.httpCl.get<T>(this.GetUrlWithAction(ApiAction.GetById) + id)
                      .pipe(
                            retry(1),
                            catchError(this.errorHandler)
                            );
  }

  public insert<T>(arg: T): Observable<number>
  {
    const http$ = this.httpCl.post<number>(this.GetUrlWithAction(ApiAction.Insert), JSON.stringify(arg), this.httpOptions)
                  .pipe(
                    retry(1),
                    catchError(this.errorHandler)
                  );
    return http$;
  }

  public delete(id: number): Observable<number>
  {
    return this.httpCl.delete<number>(this.GetUrlWithAction(ApiAction.Delete) + id)
                  .pipe(
                    retry(1),
                    catchError(this.errorHandler)
                  );
  }

  // tslint:disable-next-line: typedef
  errorHandler(error)
  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent)
    {
      // Get client-side error
      errorMessage = error.error.message;
    }
    else
    {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
