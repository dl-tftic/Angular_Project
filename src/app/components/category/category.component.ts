import { Component, OnInit } from '@angular/core';
import { ApiPaths } from 'src/app/api-paths.enum';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { promise } from 'protractor';
import { Account } from 'src/app/models/account';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BaseComponent } from 'src/app/models/base-component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent<CategoryService, Category> implements OnInit
{

  // public dataSource: Category[];
  // displayedColumns: string[]; // string[] = ['Id', 'Name', 'Type', 'Description', 'Button'];


  nameLength = 80;
  descriptionLength = 255;
  typeLength = 50;

  // tslint:disable-next-line: variable-name
  constructor(private categoryService: CategoryService, private _builder: FormBuilder, public dialog: MatDialog)
  {
    super(Category.GetDisplayedColumns(), categoryService);
  }

  ngOnInit(): void
  {

    // this.displayedColumns = Category.GetDisplayedColumns();
    // this.displayedColumns.push('Button');

    this.initListButton();

    this.getAll();
    // const nbr = Account.GetMaxLength('login');
    // alert(nbr);
  }

  // public getMaxChar(nbr: number): string
  // {
  //   return 'Max ' +  this.nameLength.toString() + ' characters';
  // }

  // public getAll(): void
  // {
  //   this.categoryService.getAll<Category>().subscribe(x => this.dataSource = x);
  // }

  // public delete(id: number): void
  // {
  //   this.categoryService.delete(id).subscribe(() => this.getAll());
  // }

  // public async delete2(id: number)
  // {
  //   await this.categoryService.delete(id).toPromise();
  //   this.getAll();
  // }

  public createDialog(): void
  {
    // this.dialog.open(CategoryDetailComponent, {height: '400px', width: '600px'});
    this.dialog.open(
                      CategoryDetailComponent,
                      { height: '400px', width: '600px',
                        data: { name: '',
                                type: '',
                                description: '',
                                update: false,
                                insert: true
                              }
                      }
                    );
  }

  public updateDialog(id: number): void
  {
    this.categoryService.getById<Category>(id).subscribe
          (x => this.dialog.open(
                                  CategoryDetailComponent,
                                  { height: '400px', width: '600px',
                                    data: { name: x.name,
                                            type: x.type,
                                            description: x.description,
                                            update: true,
                                            insert: false
                                          }
                                  }
                                )
            );

  }

}
