import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/models/base-component';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent<ProductService, Product> implements OnInit
{
  showFiller = false;
  @ViewChild('drawer') draw;

  prod: Product;

  constructor(private productService: ProductService)
  {
    super(Product.GetDisplayedColumns(), productService);
  }

  ngOnInit(): void
  {
    this.getAll();
  }

  public openInfo(id: number): void
  {
    this.getById(id).then(x => this.prod = x).finally(this.draw.toggle());
  }

  public closeDrawer(): void
  {
    this.draw.close();
  }

}
