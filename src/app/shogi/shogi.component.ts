import { Component, OnInit } from '@angular/core';
import { DispMasuState } from 'model/shogi/masu-state';
import { Motigoma } from 'model/shogi/motigoma';
import { Koma, select as selectKoma } from 'constant/shogi/koma';
import { Player, selectById as selectPlayer } from 'constant/shogi/player';
import { TsSolver, CalcResult } from 'service/shogi/ts-solver';
import { SessionManager } from 'service/session-manager';
import { KihuRecord } from 'model/shogi/kihu-record'
import { selectById as selectAct } from 'constant/shogi/kihu-act';
import { selectById as selectRel } from 'constant/shogi/kihu-rel';
import { selectById as selectOpt } from 'constant/shogi/kihu-opt';

const RH_MIN = 45, RH_MAX = 70;

@Component({
  selector: 'by-shogi',
  templateUrl: './shogi.component.html',
  styleUrls: ['./shogi.component.scss']
})
export class ShogiComponent implements OnInit {

  tesuu_op_values = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  rh: number;

  matrix: DispMasuState[] = [...Array(81)].map((_, i) => null);
  senteMtgm: Motigoma[];
  goteMtgm: Motigoma[];
  nom: number;
  result: KihuRecord[] = [];

  constructor(private solver: TsSolver, private sm: SessionManager) {

    this.sm.registStoreSetting("tss.matrix", () => JSON.stringify(this.matrix));
    this.sm.registStoreSetting("tss.senteMtgm", () => JSON.stringify(this.senteMtgm));
    this.sm.registStoreSetting("tss.goteMtgm", () => JSON.stringify(this.goteMtgm));
    this.sm.registStoreSetting("tss.nom", () => this.nom.toString());
    this.sm.registStoreSetting("tss.result", () => JSON.stringify(this.result));

    this.sm.registRetoreSetting("tss.matrix", (v) => this.matrix = JSON.parse(v));
    this.sm.registRetoreSetting("tss.senteMtgm", (v) => this.senteMtgm = JSON.parse(v));
    this.sm.registRetoreSetting("tss.goteMtgm", (v) => this.goteMtgm = JSON.parse(v));
    this.sm.registRetoreSetting("tss.nom", (v) => this.nom = Number.parseInt(v));
    this.sm.registRetoreSetting("tss.result", (v) => this.result = JSON.parse(v));
  }

  ngOnInit() {
    this.nom = 1;
    this.rh = this.calcRh(window.innerWidth);
    this.senteMtgm = this.createMotigoma(Player.Sente);
    this.goteMtgm = this.createMotigoma(Player.Gote);
  }

  private createMotigoma(player: Player) {
    return [Koma.Hisya, Koma.Kaku, Koma.Kin, Koma.Gin, Koma.Keima, Koma.Kyousya, Koma.Hu]
      .map(k => {
        return {
          koma: k,
          value: player == Player.Gote ? k.limit : 0
        }
      });
  }

  onResize(event: any) {
    this.rh = this.calcRh(event.target.innerWidth);
  }

  calcRh(width: number): number {
    const temp = width * 49.05 / 1000;
    return temp > RH_MIN ? temp > RH_MAX ? RH_MAX : temp : RH_MIN;
  }

  reset() {
    this.matrix = [...Array(81)].map((_, i) => null);
  }

  calc() {
    this.solver.calculate(
      this.matrix,
      this.senteMtgm,
      this.goteMtgm,
      this.nom).subscribe({
        next: (r: CalcResult) => {
          console.log(r.result);
          this.result = this.mapping(r.result);
        },
        error: (e: Error) => {
          console.error(e);
        }
      });
  }

  private mapping(res: any[]): KihuRecord[] {
    return res.map(r => {
      return {
        player: selectPlayer(r.player),
        fromSuzi: r.fromSuzi,
        fromDan: r.fromDan,
        suzi: r.suzi,
        dan: r.dan,
        dou: r.dou,
        koma: selectKoma(r.koma, r.koma.nari),
        rel: r.rel == null ? null : selectRel(r.rel),
        act: r.act == null ? null : selectAct(r.act),
        opt: r.opt == null ? null : selectOpt(r.opt)
      }
    });
  }
}
