import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../api-paths.enum';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService
{

    // tslint:disable-next-line: variable-name
    private _url = environment.baseUrl + ApiPaths.Account;

  constructor(private http: HttpClient)
  {

  }

  public get(id: number): Observable<Account>
  {
    console.log(this._url + '/byid/' + id);
    const http$ = this.http.get<Account>(this._url + '/byid/' + id);
    return http$;
  }

  public getAll(): Observable<Account[]>
  {
    console.log(this._url);
    const http$ = this.http.get<Account[]>(this._url + '/GetAll');
    return http$;
  }
}
