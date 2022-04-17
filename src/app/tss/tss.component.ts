import { Component, OnInit } from '@angular/core';
import { Motigoma } from 'model/tss/motigoma';
import { select as selectKoma } from 'constant/tss/koma';
import { selectById as selectPlayer } from 'constant/tss/player';
import { TsSolver, CalcResult } from 'service/shogi/ts-solver';
import { SessionManager } from 'service/session-manager';
import { KihuRecord } from 'model/tss/kihu-record'
import { selectById as selectAct } from 'constant/tss/kihu-act';
import { selectById as selectRel } from 'constant/tss/kihu-rel';
import { selectById as selectOpt } from 'constant/tss/kihu-opt';
import { QCondition } from 'model/tss/q-condition';
import { BYType } from 'constant/by-type';
import { QRecord } from 'model/tss/q-record';
import { LsKey } from 'constant/tss/ls-key';

const RH_MIN = 45, RH_MAX = 70;

@Component({
  selector: 'by-tss',
  templateUrl: './tss.component.html',
  styleUrls: ['./tss.component.scss']
})
export class TssComponent implements OnInit {

  tesuu_op_values = [1, 3, 5, 7, 9, 11, 13, 15];
  rh: number;

  records: QRecord[];
  cond: QCondition = new QCondition();
  result: KihuRecord[];
  state: number;

  constructor(private solver: TsSolver, private sm: SessionManager) {

    const str = localStorage.getItem(LsKey.Records);
    this.records = str == null ? [] : JSON.parse(str);

    this.sm.registStoreSetting(BYType.TSS, "cond", () => JSON.stringify(this.cond));
    this.sm.registStoreSetting(BYType.TSS, "result", () => JSON.stringify(this.result));
    this.sm.registStoreSetting(BYType.TSS, "state", () => this.state.toString());

    this.sm.registRetoreSetting(BYType.TSS, "cond", (v) => this.cond = JSON.parse(v));
    this.sm.registRetoreSetting(BYType.TSS, "result", (v) => this.result = JSON.parse(v));
    this.sm.registRetoreSetting(BYType.TSS, "state", (v) => this.state = Number.parseInt(v));
  }

  ngOnInit() {
    this.rh = this.calcRh(window.innerWidth);
    this.reset();
  }

  onResize(event: any) {
    this.rh = this.calcRh(event.target.innerWidth);
  }

  calcRh(width: number): number {
    const temp = width * 49.05 / 1000;
    return temp > RH_MIN ? temp > RH_MAX ? RH_MAX : temp : RH_MIN;
  }

  reset() {
    this.cond.reset();
    this.result = [];
    this.state = 0;
  }

  calc() {
    this.solver.calculate(this.cond)
      .subscribe({
        next: (r: CalcResult) => {
          if (r.result.length != 0) {
            this.result = this.mapping(r.result);
            this.state = 1;
          } else
            this.state = 2;
        },
        error: (e: Error) => {
          this.state = 100;
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
        koma: selectKoma(r.koma, r.nari),
        rel: r.rel == null ? null : selectRel(r.rel),
        act: r.act == null ? null : selectAct(r.act),
        opt: r.opt == null ? null : selectOpt(r.opt)
      }
    });
  }

  truncateMtgm(sente: boolean, event: Motigoma) {
    const mtgm = sente ? this.cond.goteMtgm : this.cond.senteMtgm;
    const target = mtgm.find(m => m.koma.key == event.koma.key);
    if (target.value + event.value > event.koma.limit)
      target.value = event.koma.limit - event.value;
  }
}
