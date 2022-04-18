import { Injectable } from '@angular/core';
import { select as selectKoma } from 'constant/tss/koma';
import { selectById as selectPlayer } from 'constant/tss/player';

import { TssCommons } from './tss-commons';
import { QCondition, SmartQCondition } from 'model/tss/q-condition';
import { MasuState, SmartMasuState, DispMasuState } from 'model/tss/masu-state';
import { Motigoma, SmartMotigoma } from 'model/tss/motigoma';

@Injectable({
    providedIn: 'root'
})
export class CondConverter {

    constructor(private commons: TssCommons) { }

    regular2smart(cond: QCondition): SmartQCondition {
        return {
            matrix: cond.matrix.filter(m => m != null).map(this.state2smart),
            senteMtgm: cond.senteMtgm.map(this.mtgm2smart),
            goteMtgm: cond.goteMtgm.map(this.mtgm2smart),
            nom: cond.nom
        };
    }

    smart2regular(cond: SmartQCondition): QCondition {
        const matrix: DispMasuState[] = [...Array(81)].map((_, i) => null);
        for (let i = 0; i < matrix.length; i++) {
            const suzi = this.commons.getSuziByIdx(i), dan = this.commons.getDanByIdx(i);
            const ss = cond.matrix.find(m => m.suzi == suzi && m.dan == dan);
            matrix[i] = this.smart2state(ss);
        }
        return {
            matrix: matrix,
            senteMtgm: cond.senteMtgm.map(this.smart2mtgm),
            goteMtgm: cond.goteMtgm.map(this.smart2mtgm),
            nom: cond.nom
        };
    }

    private state2smart(m: MasuState): SmartMasuState {
        return {
            player: m.player.id,
            koma: m.koma.key,
            nari: m.koma.nari,
            suzi: m.suzi,
            dan: m.dan
        };
    }

    private smart2state(m: SmartMasuState): DispMasuState {
        const p = selectPlayer(m.player);
        const k = selectKoma(m.koma, m.nari);
        return {
            player: p,
            koma: k,
            suzi: m.suzi,
            dan: m.dan,
            imagePath: this.commons.getImagePath(k, p)
        };
    }

    private mtgm2smart(m: Motigoma): SmartMotigoma {
        return {
            koma: m.koma.key,
            nari: m.koma.nari,
            value: m.value
        };
    }

    private smart2mtgm(m: SmartMotigoma): Motigoma {
        return {
            koma: selectKoma(m.koma, m.nari),
            value: m.value
        };
    }
}