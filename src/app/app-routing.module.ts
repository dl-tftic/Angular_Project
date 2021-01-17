import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { ProjectComponent } from './components/project/project.component';
import { TestMaterialComponent } from './components/test-material/test-material.component';

const routes: Routes =
[
  { path: 'project', component: ProjectComponent },
  { path: 'account', component: AccountComponent },
  { path: 'testMaterial', component: TestMaterialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
