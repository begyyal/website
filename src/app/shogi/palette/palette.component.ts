import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'by-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  @Input() rh: number;
  @Input() player: string;
  images: (string | null)[];
  masu_ids = [...Array(81)].map((_, i) => "masu_" + i);

  constructor() {
  }

  ngOnInit() {
    this.images = this.createImagePaths(this.player);
  }

  private createImagePaths(player: string) {
    return [...Array(16)]
      .map((_, i) => i == 8 || i == 11 ? null : "assets/koma/" + player + "/" + i + ".png");
  }

  returnFalse() {
    return false;
  }
}
