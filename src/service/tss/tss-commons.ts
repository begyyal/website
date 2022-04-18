import { Injectable } from '@angular/core';
import { Koma } from 'constant/tss/koma';
import { Player } from 'constant/tss/player';

@Injectable({
    providedIn: 'root'
})
export class TssCommons {

    constructor() { }

    getImagePath(koma: Koma, player: Player) {
        return "assets/koma/" + player.desc1 + "/" + koma.index + ".png";
    }

    getSuziByIdx(index: number) {
        return 9 - index % 9;
    }

    getDanByIdx(index: number) {
        return Math.floor(index / 9) + 1;
    }
}