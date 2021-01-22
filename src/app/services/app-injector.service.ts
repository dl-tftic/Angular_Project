import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInjectorService
{
  constructor() { }

  // tslint:disable-next-line: variable-name
  private static _injector: Injector;

  static set injector(injector: Injector)
  {
      this._injector = injector;
  }

  static get injector(): Injector
  {
      return this._injector;
  }
}
