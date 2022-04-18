import { Component, Input } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { DispMasuState } from 'model/tss/masu-state';
import { TssCommons } from 'service/shogi/tss-commons';

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent {

  @Input() matrix: DispMasuState[];
  @Input() rh: number;

  constructor(private commons: TssCommons) {
  }

  drop(event: CdkDragDrop<DispMasuState[], DispMasuState[], DispMasuState>, index: number) {
    let clone = { ...event.item.data };
    clone.suzi = this.commons.getSuziByIdx(index);
    clone.dan = this.commons.getDanByIdx(index);
    this.matrix[index] = clone;
  }

  remove(i: number) {
    this.matrix[i] = null;
  }
}
