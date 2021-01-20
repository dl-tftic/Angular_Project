import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AccountComponent,
    TestMaterialComponent,
    MenuComponent,
    CategoryComponent
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
export class AppModule { }
