import { Koma } from 'constant/tss/koma';
import { Player } from 'constant/tss/player';
import { KihuAct } from 'constant/tss/kihu-act';
import { KihuRel } from 'constant/tss/kihu-rel';
import { KihuOpt } from 'constant/tss/kihu-opt';

export interface KihuRecord {
    player: Player;
    fromSuzi: number;
    fromDan: number;
    suzi: number;
    dan: number;
    dou: boolean;
    koma: Koma;
    rel: KihuRel;
    act: KihuAct;
    opt: KihuOpt;
}
