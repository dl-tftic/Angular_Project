import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountComponent } from './components/account/account.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProjectComponent } from './components/project/project.component';
import { TestMaterialComponent } from './components/test-material/test-material.component';

const routes: Routes =
[
  { path: 'project', component: ProjectComponent },
  { path: 'product', component: ProductComponent },
  { path: 'account', component: AccountComponent },
  { path: 'accountdetail', component: AccountDetailComponent },
  { path: 'testMaterial', component: TestMaterialComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'categorydetail', component: CategoryDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
