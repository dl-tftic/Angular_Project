import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../api-paths.enum';
import { Product } from '../models/product';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseServiceService
{

  constructor(private http: HttpClient)
  {
    super(ApiPaths.Product);
  }

  public get(id: number): Observable<Product>
  {
    console.log(this.GetUrl() + '/' + id);
    const http$ = this.http.get<Product>(this.GetUrl() + '/' + id);
    return http$;
  }

  public getAll(): Observable<Product[]>
  {
    const http$ = this.http.get<Product[]>(this.GetUrl() + '/GetAll');
    return http$;
  }

  public insert(product: Product): Observable<Product>
  {
    return;
  }

  public delete(id: number): Observable<number>
  {
    return;
  }

}
