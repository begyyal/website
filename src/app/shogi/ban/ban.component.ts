import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'by-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.scss']
})
export class BanComponent implements OnInit {

  matrix: number[] = [...Array(81)].map((_, i) => i);
  rh = 0;

  constructor() {
  }

  ngOnInit() {
    this.rh = this.calcRh(window.innerWidth);
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex,
      );
    }
  }

  onResize(event: any) {
    this.rh = this.calcRh(event.target.innerWidth);
  }

  calcRh(width: number): number {
    const temp = width * 49.05 / 1000;
    return temp > 45 ? temp > 80 ? 80 : temp : 45;
  }
}
