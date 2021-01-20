import { Component, OnInit } from '@angular/core';
import { ApiPaths } from 'src/app/api-paths.enum';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { promise } from 'protractor';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit
{

  private cat: Category[];
  public registerForm: FormGroup;

  public dataSource: Category[];
  displayedColumns: string[] = ['Id', 'Name', 'Type', 'Description', 'Button'];


  nameLength = 80;
  descriptionLength = 255;
  typeLength = 50;

  // tslint:disable-next-line: variable-name
  constructor(private categoryService: CategoryService, private _builder: FormBuilder)
  {
    categoryService.SetPath(ApiPaths.Category);
  }

  ngOnInit(): void
  {
    this.registerForm = this._builder.group(
      {
        Name: this._builder.control('', [Validators.required,
                                        Validators.maxLength(this.nameLength)]),
        Description: this._builder.control('', [ Validators.maxLength(this.descriptionLength) ]),
        Type: this._builder.control('', [ Validators.maxLength(this.typeLength) ])
      }
    );

    this.categoryService.getAll().subscribe(x => this.dataSource = x);
    const nbr = Account.GetMaxLength('login');
    alert(nbr);
  }

  public getMaxChar(nbr: number): string
  {
    return 'Max ' +  this.nameLength.toString() + ' characters';
  }

  public onSubmit(): void
  {
    if (this.registerForm.valid)
    {
      // tslint:disable-next-line: prefer-const
      let cat: Category = {
                            name: this.registerForm.get('Name').value,
                            type: this.registerForm.get('Type').value,
                            description: this.registerForm.get('Description').value,
                            createBy: 1
                          };

      this.categoryService.insert(cat).subscribe();
      console.log(cat.name);
      console.log(cat.description);
      console.log(cat.type);
      this.getAll();
    }
  }

  public getAll(): void
  {
    this.categoryService.getAll().subscribe(x => this.dataSource = x);
  }

  public delete(id: number): void
  {
    this.categoryService.delete(id).subscribe();
    this.getAll();
  }

  public async delete2(id: number)
  {
    await this.categoryService.delete(id).toPromise();
    this.getAll();
  }

}
