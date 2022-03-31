import { Component, Input } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent {

  @Input() matrix = [...Array(81)].map((_, i) => [""]);
  @Input() rh = 0;

  constructor() {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.currentIndex);
    console.log(event.container.data);
    event.container.data[0] = event.item.data;
  }
}
