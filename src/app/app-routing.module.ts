import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes =
[
  { path: 'project', component: ProjectComponent  },
  { path: 'account', component: AccountComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
