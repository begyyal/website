import { Component, Input } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent {

  @Input() matrix: string[][];
  @Input() rh: number;

  constructor() {
  }

  drop(event: CdkDragDrop<string[]>) {
    event.container.data[0] = event.item.data;
  }

  remove(i: number) {
    this.matrix[i][0] = null;
  }
}
