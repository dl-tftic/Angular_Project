import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../api-paths.enum';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { BaseServiceService } from './base-service.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseServiceService
{

  constructor(private http: HttpClient)
  {
    super();
  }

  public get(id: number): Observable<Category>
  {
    console.log(this.GetUrl() + '/' + id);
    const http$ = this.http.get<Category>(this.GetUrl() + '/' + id);
    return http$;
  }

  public getAll(): Observable<Category[]>
  {
    const http$ = this.http.get<Category[]>(this.GetUrl());
    return http$;
  }

  public insert(category): Observable<Category>
  {
    console.log(this.GetUrl() + '/');
    const http$ = this.http.post<Category>(this.GetUrl() + '/', JSON.stringify(category), this.httpOptions)
                  .pipe(
                    retry(1),
                    catchError(this.errorHandler)
                  );
    return http$;
  }

  public delete(id: number): Observable<number>
  {
    console.log(this.GetUrl() + '/');
    const http$ = this.http.delete<number>(this.GetUrl() + '/delete/' + id)
                  .pipe(
                    retry(1),
                    catchError(this.errorHandler)
                  );
    return http$;
  }

}
