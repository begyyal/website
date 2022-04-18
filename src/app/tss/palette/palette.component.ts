import { Component, OnInit, Input } from '@angular/core';
import { selectById } from 'constant/tss/player';
import { selectByIndex } from 'constant/tss/koma';
import { DispMasuState } from 'model/tss/masu-state';
import { TssCommons } from 'service/tss/tss-commons';

@Component({
  selector: 'by-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  @Input() rh: number;
  @Input() player: string;
  states: DispMasuState[];
  masu_ids = [...Array(81)].map((_, i) => "masu_" + i);

  constructor(private commons: TssCommons) {
  }

  ngOnInit() {
    this.states = this.createMasuStates(this.player);
  }

  private createMasuStates(playerId: string) {
    return [...Array(16)]
      .map((_, i) => {
        if (i == 8 || i == 11)
          return null;
        const p = selectById(playerId);
        const k = selectByIndex(i);
        return {
          player: p,
          koma: k,
          suzi: -1,
          dan: -1,
          imagePath: this.commons.getImagePath(k, p)
        };
      });
  }

  returnFalse() {
    return false;
  }
}
