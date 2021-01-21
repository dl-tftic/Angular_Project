import { Injectable } from '@angular/core';
import { Roles } from '../models/roles';
import { RolesFromApiService } from './rolesFromApi.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService
{

  // tslint:disable-next-line: variable-name
  private _roles: Roles[];

  constructor(private rolesFromApi: RolesFromApiService)
  {

  }

  public load(): void
  {
    this.rolesFromApi.getAll<Roles>().subscribe(x => this._roles = x);

  }
}
