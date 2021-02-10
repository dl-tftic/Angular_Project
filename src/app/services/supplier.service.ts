import { Injectable } from '@angular/core';
import { ApiPaths } from '../api-paths.enum';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService
{

  constructor()
  {
    super(ApiPaths.Supplier);
  }
}
