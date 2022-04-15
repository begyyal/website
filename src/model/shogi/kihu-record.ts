import { Koma } from 'constant/shogi/koma';
import { Player } from 'constant/shogi/player';
import { KihuAct } from 'constant/shogi/kihu-act';
import { KihuRel } from 'constant/shogi/kihu-rel';
import { KihuOpt } from 'constant/shogi/kihu-opt';

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
