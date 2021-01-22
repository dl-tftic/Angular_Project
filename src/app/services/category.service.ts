import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../api-paths.enum';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { BaseService } from './base-service.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService
{

  constructor()
  {
    super(ApiPaths.Category);
  }

  // public get(id: number): Observable<Category>
  // {
  //   // console.log(this.GetUrl() + '/' + id);
  //   const http$ = this.http.get<Category>(this.GetUrl() + '/GetById/' + id);
  //   return http$;
  // }

  // public getAll(): Observable<Category[]>
  // {
  //   const http$ = this.http.get<Category[]>(this.GetUrl() + '/GetAll');
  //   return http$;
  // }

  // public insert(category): Observable<Category>
  // {
  //   // console.log(this.GetUrl() + '/');
  //   const http$ = this.http.post<Category>(this.GetUrl() + '/', JSON.stringify(category), this.httpOptions)
  //                 .pipe(
  //                   retry(1),
  //                   catchError(this.errorHandler)
  //                 );
  //   return http$;
  // }

}
