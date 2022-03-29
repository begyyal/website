import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

const RH_MIN = 45, RH_MAX = 80;

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent implements OnInit {

  gote_images = this.createImagePaths("gote");
  sente_images = this.createImagePaths("sente");
  matrix: number[] = [...Array(81)].map((_, i) => i);
  rh = 0;

  constructor() {
  }

  ngOnInit() {
    this.rh = this.calcRh(window.innerWidth);
  }

  private createImagePaths(player: string) {
    return [...Array(16)]
      .map((_, i) => i == 8 || i == 11 ? null : "assets/koma/" + player + "/" + i + ".png");
  }

  drop(event: CdkDragDrop<number[]>) {
  }

  onResize(event: any) {
    this.rh = this.calcRh(event.target.innerWidth);
  }

  calcRh(width: number): number {
    const temp = width * 49.05 / 1000;
    return temp > RH_MIN ? temp > RH_MAX ? RH_MAX : temp : RH_MIN;
  }
}
