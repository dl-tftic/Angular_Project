import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiAction } from '../api-action.enum';
import { ApiPaths } from '../api-paths.enum';
import { Account } from '../models/account';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService
{

  constructor()
  {
    super(ApiPaths.Account);
  }

  // public get(id: number): Observable<Account>
  // {
  //   console.log(this.GetUrl() + '/byid/' + id);
  //   const http$ = this.http.get<Account>(this._url + '/byid/' + id);
  //   return http$;
  // }

}
