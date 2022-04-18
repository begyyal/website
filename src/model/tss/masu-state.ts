import { Koma } from 'constant/tss/koma';
import { Player } from 'constant/tss/player';

export interface DispMasuState extends MasuState {
    imagePath: string;
}

export interface MasuState {
    player: Player;
    koma: Koma;
    suzi: number;
    dan: number;
}

export interface SmartMasuState {
    player: string;
    koma: string;
    nari: boolean;
    suzi: number;
    dan: number;
}

export function isMasuState(obj: any): obj is SmartMasuState {
    let ok = obj.player !== undefined &&
        obj.koma !== undefined &&
        obj.nari !== undefined &&
        obj.suzi !== undefined &&
        obj.dan !== undefined;
    ok = ok && typeof obj.player === "string" &&
        typeof obj.koma === "string" &&
        typeof obj.nari === "boolean" &&
        typeof obj.suzi === "number" &&
        typeof obj.dan === "number";
    return ok;
}
