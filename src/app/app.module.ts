import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './components/project/project.component';
import { AccountComponent } from './components/account/account.component';
import { MaterialModule } from './modules/material/material.module';
import { TestMaterialComponent } from './components/test-material/test-material.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryDetailComponent } from './components/category/category-detail/category-detail.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AppInjectorService } from './services/app-injector.service';



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AccountComponent,
    TestMaterialComponent,
    MenuComponent,
    CategoryComponent,
    LoginComponent,
    ProductComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    AccountDetailComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(injector: Injector)
  {
    AppInjectorService.injector = injector;
  }
}
