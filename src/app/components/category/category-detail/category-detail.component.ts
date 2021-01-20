import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit
{

  public category: Category;
  public registerForm: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(private categoryService: CategoryService,
      // tslint:disable-next-line: variable-name
              private _builder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {

  }

  ngOnInit(): void
  {
    this.registerForm = this._builder.group(
      {
        Name: this._builder.control('', [Validators.required,
                                        Validators.maxLength(Category.GetMaxLength('name'))]),
        Description: this._builder.control('', [ Validators.maxLength(Category.GetMaxLength('description')) ]),
        Type: this._builder.control('', [ Validators.maxLength(Category.GetMaxLength('type')) ])
      }
    );
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
    }
  }

}
