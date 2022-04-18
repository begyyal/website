import { NgModule } from '@angular/core';
import { ByDialog } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ByDialog
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  providers: []
})
export class ByDialogModule { }
