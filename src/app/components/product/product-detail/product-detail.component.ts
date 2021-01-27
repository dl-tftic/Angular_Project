import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BaseComponent } from 'src/app/models/base-component';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends BaseComponent<ProductService, Product> implements OnInit
{

  @Input() product: Product;

  // tslint:disable-next-line: no-output-rename
  @Output('closeDrawer') closeDraw: EventEmitter<any> = new EventEmitter();

  treeControl = new NestedTreeControl<Category>(node => node.subCategories);
  dataSourceTree = new MatTreeNestedDataSource<Category>();

  productDetailForm: FormGroup;

  showCategory: boolean;

  constructor(private productService: ProductService, private builder: FormBuilder)
  {
    super(Product.GetDisplayedColumns(), productService);
  }

  ngOnInit(): void
  {
    // if (this.product != null)
    // {
    //   this.product = new Product();
    // }

    this.productDetailForm = this.builder.group
    (
      {
        name: this.builder.control('', [ Validators.required,
                                        Validators.maxLength(Product.GetMaxLength('name'))]),
        description: this.builder.control('', [ Validators.maxLength(Product.GetMaxLength('description')) ]),
        code: this.builder.control('', [ Validators.required ])
      }
    );

    this.dataSourceTree.data = this.product.categories;

    this.showCategory = false;
  }

  hasChild = (_: number, node: Category) => !!node.subCategories && node.subCategories.length > 0;

  hasFiles = (node: Category) => node.files.length > 0;

  onSubmit(): void
  {

  }

  onClickDirectory(id: number): void
  {
    // Require : CategoryId, ProductId & ParentCategoryProductId
    this.showCategory = true;
    alert('ParentCategoryProductId : ' + id + ' - productId : ' + this.product.id);
  }

  onClickFile(id: number): void
  {
    alert('File' + id);
  }

}
