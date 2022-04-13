import { Component, Input } from '@angular/core';
import { KihuRecord } from 'model/shogi/kihu-record'

@Component({
  selector: 'by-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.scss']
})
export class ResultDisplayComponent {

  @Input()
  result: KihuRecord[];

  constructor() {
  }

  summarize(rec: KihuRecord) {
    let disp = rec.player.desc2;
    disp += " - ";
    if (!rec.dou) {
      disp += String.fromCharCode(rec.suzi.toString().charCodeAt(0) + 0xFEE0);
      disp += String.fromCharCode(rec.dan.toString().charCodeAt(0) + 0xFEE0);
    } else
      disp += rec.koma.desc;
    if (rec.rel != null)
      disp += rec.rel.desc;
    if (rec.act != null)
      disp += rec.act.desc;
    if (rec.opt != null)
      disp += rec.opt.desc;
    return disp;
  }
}
