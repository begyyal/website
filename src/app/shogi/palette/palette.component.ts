import { Component, OnInit, Input } from '@angular/core';
import { selectById } from 'constant/shogi/player';
import { selectByIndex } from 'constant/shogi/koma';
import { DispMasuState } from 'model/shogi/masu-state';

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

  constructor() {
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
        return {
          player: p,
          koma: selectByIndex(i),
          suzi: -1,
          dan: -1,
          imagePath: "assets/koma/" + p.desc1 + "/" + i + ".png"
        };
      });
  }

  returnFalse() {
    return false;
  }
}
