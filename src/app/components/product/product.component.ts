import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit
{

  public dataSource: Product[];
  public displayedColumns: string[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void
  {
    this.displayedColumns = Product.GetDisplayedColumns();
    this.displayedColumns.push('Button');

    this.getAll();
  }

  public getAll(): void
  {
    this.productService.getAll().subscribe(x => this.dataSource = x);
  }

}
