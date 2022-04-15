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
