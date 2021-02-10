import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountComponent } from './components/account/account.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactInfoBaseComponent } from './components/contactInfo/contact-info-base/contact-info-base.component';
import { FilesDetailComponent } from './components/files/files-detail/files-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { ProjectComponent } from './components/project/project.component';
import { TestMaterialComponent } from './components/test-material/test-material.component';

const routes: Routes =
[
  { path: 'project', component: ProjectComponent },
  { path: 'projectdetail', component: ProjectDetailComponent,
    children: [
        { path: '', component: ProjectDetailComponent },
        { path: 'add', component: ProjectDetailComponent },
        { path: 'edit/:id', component: ProjectDetailComponent }
      ]
  },
  { path: 'product', component: ProductComponent },
  { path: 'account', component: AccountComponent },
  { path: 'accountdetail', component: AccountDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'categorydetail', component: CategoryDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'filesdetail', component: FilesDetailComponent },
  { path: 'contactinfo', component: ContactInfoBaseComponent },
  { path: 'testMaterial', component: TestMaterialComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
