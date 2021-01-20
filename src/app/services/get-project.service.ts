import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscribable } from 'rxjs';
import { ApiPaths } from '../api-paths.enum';
import { Project } from '../models/project';
import { environment } from './../../environments/environment';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetProjectService extends BaseServiceService
{

  // tslint:disable-next-line: variable-name
  // private _url = environment.baseUrl + ApiPaths.Project;

  constructor(private http: HttpClient)
  {
    super(ApiPaths.Project);
  }

  public getProject(id: number): Subscribable<any>
  {
    // const params = new HttpParams().set('id', id.toString());
    // return this.http.get(this._url, {params});
    return this.http.get(this.GetUrl() + '/getbyid/' + id);
  }

  public getById(id: number): Subscribable<Project>
  {
    // const params = new HttpParams().set('id', id.toString());
    // return this.http.get(this._url, {params});
    return this.http.get<Project>(this.GetUrl() + '/getbyid/' + id);
  }

  public getAll(): Subscribable<Project[]>
  {
    // const params = new HttpParams().set('id', id.toString());
    // return this.http.get(this._url, {params});
    return this.http.get<Project[]>(this.GetUrl() + '/getAll/');
  }

}
