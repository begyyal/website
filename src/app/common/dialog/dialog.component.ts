import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  confirm: boolean
  title: string
  text: string[]
}

@Component({
  selector: 'by-dialog',
  templateUrl: './dialog.component.html'
})
export class ByDialog {
  title: string;
  text: string[];
  confirm: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}