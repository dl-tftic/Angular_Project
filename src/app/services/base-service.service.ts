import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../api-paths.enum';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService
{

  // tslint:disable-next-line: variable-name
  protected _url: string;

  protected httpOptions =
  {
    headers: new HttpHeaders(
    {
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor()
  {

  }

  public GetUrl(): string
  {
    return this._url;
  }

  public SetPath(path: ApiPaths): void
  {
    this._url = environment.baseUrl + path;
  }

  // tslint:disable-next-line: typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
