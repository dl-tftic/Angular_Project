import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from '../api-paths.enum';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService
{

  constructor(private http: HttpClient)
  {
    super(ApiPaths.Country, http);
  }
}
