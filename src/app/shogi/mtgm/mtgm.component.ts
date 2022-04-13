import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { selectById, Player } from 'constant/shogi/player';
import { Motigoma } from 'model/shogi/motigoma';

@Component({
  selector: 'by-mtgm',
  templateUrl: './mtgm.component.html',
  styleUrls: ['./mtgm.component.scss']
})
export class MtgmComponent implements OnInit {

  @Input() mtgm: Motigoma[];
  opValues: number[][];
  @Input() playerId: string;
  mtgm_tile_count = [...Array(7)].map((_, i) => i);
  player: Player;
  @Output() emChange = new EventEmitter<Motigoma>();


  constructor() {
  }

  ngOnInit() {
    this.player = selectById(this.playerId);
    this.opValues = this.mtgm.map(op => [...Array(op.koma.limit + 1)].map((_, i) => i));
  }

  getMtgmLabel(idx: number) {
    return this.mtgm[idx].koma.desc;
  }

  onChange(mtgmRec: Motigoma) {
    this.emChange.emit(mtgmRec);
  }
}