import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from '../../services/account.service';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import { NextObserver, Observer, PartialObserver } from 'rxjs';
import { BaseComponent } from 'src/app/models/base-component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends BaseComponent<AccountService, Account> implements OnInit
{

  // tslint:disable-next-line: member-ordering
  public response: Account;

  constructor(private accountService: AccountService)
  {
    super(Account.GetDisplayedColumns(), accountService);
  }

  ngOnInit(): void
  {
    this.getAll();
  }

}
