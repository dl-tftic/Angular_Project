import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAction } from '../api-action.enum';
import { ApiPaths } from '../api-paths.enum';
import { Roles } from '../models/roles';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class RolesFromApiService extends BaseService
{

  constructor(private http: HttpClient)
  {
    super(ApiPaths.Roles, http);
  }

}
