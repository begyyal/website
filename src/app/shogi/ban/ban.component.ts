import { Component, Input } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { DispMasuState } from 'model/shogi/masu-state';

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent {

  @Input() matrix: DispMasuState[];
  @Input() rh: number;

  constructor() {
  }

  drop(event: CdkDragDrop<DispMasuState[], DispMasuState[], DispMasuState>, index: number) {
    let clone = { ...event.item.data };
    clone.suzi = 9 - index % 9;
    clone.dan = Math.floor(index / 9) + 1;
    this.matrix[index] = clone;
  }

  remove(i: number) {
    this.matrix[i] = null;
  }
}
