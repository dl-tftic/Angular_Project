import { Component, Injector, OnInit } from '@angular/core';
import { ApiPaths } from 'src/app/api-paths.enum';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { promise } from 'protractor';
import { Account } from 'src/app/models/account';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { BaseComponent } from 'src/app/models/base-component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent<CategoryService, Category> implements OnInit
{
  // tslint:disable-next-line: variable-name
  constructor(private categoryService: CategoryService,
              public dialog: MatDialog
              )
  {
    super(Category.GetDisplayedColumns(), categoryService);
  }

  ngOnInit(): void
  {

    this.initListButton();

    this.getAll();
  }

  public createDialog(): void
  {
    // this.dialog.open(CategoryDetailComponent, {height: '400px', width: '600px'});
    let dialogRef = this.dialog.open(
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
    dialogRef.afterClosed().subscribe(() => this.init());
    // this.init();
  }

  public async updateDialog(id: number): Promise<void>
  {
    // let dialogRef: MatDialogRef;
    let cat: Category = await this.getById(id);
    console.log(cat);
    let dialogRef = this.dialog.open(
                                    CategoryDetailComponent,
                                    { height: '400px', width: '600px',
                                      data: { name: cat.name,
                                              type: cat.type,
                                              description: cat.description,
                                              update: true,
                                              insert: false
                                            }
                                    }
                                  );

    dialogRef.afterClosed().subscribe(() => this.init());

  }

}
