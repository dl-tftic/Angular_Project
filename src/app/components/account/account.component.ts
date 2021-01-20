import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from '../../services/account.service';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli' },
          { name: 'Brussels sprouts' },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins' },
          { name: 'Carrots' },
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit
{
  // tslint:disable-next-line: variable-name
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      // tslint:disable-next-line: object-literal-shorthand
      level: level,
    };
  }

  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // tslint:disable-next-line: member-ordering
  public response: Account;
  // tslint:disable-next-line: member-ordering
  private respString: string;
  // tslint:disable-next-line: member-ordering
  private testString: string;
  // tslint:disable-next-line: member-ordering
  private errorString: string;

  constructor(private accountService: AccountService)
  {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void
  {
    // this.response = '';
    this.errorString = '';
    this.accountService.get(1)
          .pipe
          (
            // tap(() => console.log('HTTP request executed')),
            // map(res => Object.values(res) )
          )
          .subscribe
          (
              // data => this.response = data,
              // error => this.errorString = error
              acc => this.response = acc,
              error => console.log(error),
              () => console.log('HTTP request completed.')
          );
    console.log(this.response);
    this.respString = JSON.stringify(this.response);

    this.testString = '{\r\n    \"id\": 1,\r\n    \"login\": \"dave\",\r\n    \"activate\": true,\r\n    \"lastName\": \"Lissens\",\r\n    \"firstName\": \"David\",\r\n    \"password\": null,\r\n    \"salt\": null,\r\n    \"role\": {\r\n        \"id\": 1,\r\n        \"role\": \"superadmin\",\r\n        \"description\": \"\"\r\n    },\r\n    \"address\": {\r\n        \"id\": 1,\r\n        \"street\": \"Faubourg Leon Hurez\",\r\n        \"number\": \"14\",\r\n        \"box\": null,\r\n        \"city\": {\r\n            \"id\": 1936,\r\n            \"country\": {\r\n                \"id\": 21,\r\n                \"iso\": \"BE\",\r\n                \"name\": \"Belgium\",\r\n                \"iso3\": \"BEL\",\r\n                \"numCode\": 56,\r\n                \"phoneCode\": 32\r\n            },\r\n            \"code\": \"7110\",\r\n            \"city\": \"Str\u00E9py-Bracquegnies\"\r\n        },\r\n        \"country\": null\r\n    },\r\n    \"contactInfos\": [\r\n        {\r\n            \"id\": 1,\r\n            \"contactType\": \"phone\",\r\n            \"contactInformation\": \"02\/270 93 04\",\r\n            \"description\": null\r\n        }\r\n    ],\r\n    \"createDate\": \"2021-01-16T00:00:00\",\r\n    \"createBy\": 0\r\n}';
    this.respString = JSON.parse(this.testString);
  }

  public get(id: number): Account
  {
    let account: Account;

    this.accountService.get(id)
          .subscribe
          (
              acc => account = acc,
              error => console.log(error),
              () => console.log('HTTP request completed.')
          );

    return account;
  }

  public getAll(): Account[]
  {
    let accounts: Account[];

    this.accountService.getAll()
    .subscribe
    (
        acc => accounts = acc,
        error => console.log(error),
        () => console.log('HTTP request completed.')
    );

    return accounts;
  }
}
