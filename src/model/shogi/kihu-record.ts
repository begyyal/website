import { Koma, select as selectKoma } from 'constant/shogi/koma';
import { Player, selectById as selectPlayer } from 'constant/shogi/player';
import { KihuAct, selectById as selectAct } from 'constant/shogi/kihu-act';
import { KihuRel, selectById as selectRel } from 'constant/shogi/kihu-rel';
import { KihuOpt, selectById as selectOpt } from 'constant/shogi/kihu-opt';

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