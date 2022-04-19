import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: []
})
export class HomeModule { }
