import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiAction } from '../api-action.enum';
import { ApiPaths } from '../api-paths.enum';
import { IBaseService } from '../models/base-component';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService extends BaseService
{

  constructor()
  {
    super(ApiPaths.Files);
  }

  public insertFormData(data: FormData): Observable<HttpEvent<number>>
  {
    const http$ = this.http
      .post<number>
      (
        this.GetUrlWithAction(ApiAction.Insert),
        data,
        { reportProgress: true, observe: 'events' }
      )
      .pipe(retry(1), catchError(this.errorHandler));
    return http$;
  }

}
