import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../api-paths.enum';
import { Product } from '../models/product';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService
{

  constructor(private http: HttpClient)
  {
    super(ApiPaths.Product, http);
  }

  public get(id: number): Observable<Product>
  {
    console.log(this.GetUrl() + '/' + id);
    const http$ = this.http.get<Product>(this.GetUrl() + '/' + id);
    return http$;
  }

  public delete(id: number): Observable<number>
  {
    return;
  }

}
