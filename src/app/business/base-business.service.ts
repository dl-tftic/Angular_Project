import { Injectable } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class BaseBusinessService<T>
{

  constructor(private service: T)
  {

  }
}
