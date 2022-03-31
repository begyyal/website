import { Component, Input } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'by-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent {

  @Input() rh = 0;
  gote_images = this.createImagePaths("gote");
  sente_images = this.createImagePaths("sente");
  masu_ids = [...Array(81)].map((_, i) => "masu_" + i);

  constructor() {
  }

  private createImagePaths(player: string) {
    return [...Array(16)]
      .map((_, i) => i == 8 || i == 11 ? null : "assets/koma/" + player + "/" + i + ".png");
  }
}
