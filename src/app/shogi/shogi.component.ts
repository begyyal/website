import { Component, OnInit } from '@angular/core';

const RH_MIN = 45, RH_MAX = 70;

@Component({
  selector: 'by-shogi',
  templateUrl: './shogi.component.html',
  styleUrls: ['./shogi.component.scss']
})
export class ShogiComponent implements OnInit {

  matrix = [...Array(81)].map((_, i) => [""]);
  rh = 0;

  constructor() {
  }

  ngOnInit() {
    this.rh = this.calcRh(window.innerWidth);
  }

  onResize(event: any) {
    this.rh = this.calcRh(event.target.innerWidth);
  }

  calcRh(width: number): number {
    const temp = width * 49.05 / 1000;
    return temp > RH_MIN ? temp > RH_MAX ? RH_MAX : temp : RH_MIN;
  }

  reset() {
    this.matrix = [...Array(81)].map((_, i) => [""]);
  }
}
