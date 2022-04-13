import { Koma } from 'constant/shogi/koma';
import { Player } from 'constant/shogi/player';

export interface DispMasuState extends MasuState {
    imagePath: string;
}

export interface MasuState {
    player: Player;
    koma: Koma;
    suzi: number;
    dan: number;
}