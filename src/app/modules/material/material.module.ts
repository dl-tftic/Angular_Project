import { NgModule } from '@angular/core';

import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';




const MaterialComponents =
[
  MatButtonModule,
  MatTreeModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
