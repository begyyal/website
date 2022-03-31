import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

const MTGM_LABEL = ["飛車", "角", "金", "銀", "桂馬", "香車", "歩"];

@Component({
  selector: 'by-mtgm',
  templateUrl: './mtgm.component.html',
  styleUrls: ['./mtgm.component.scss']
})
export class MtgmComponent implements OnInit {

  @Input() player: string;
  mtgm_tile_count = [...Array(14)].map((_, i) => i);
  pLabel: string;

  constructor() {
  }

  ngOnInit() {
    this.pLabel = this.player == "gote" ? "後手" : "先手";
  }

  getMtgmLabel(idx: number) {
    return MTGM_LABEL.length - 1 < idx ? null : MTGM_LABEL[idx];
  }
}
