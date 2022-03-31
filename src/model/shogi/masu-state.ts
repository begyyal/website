import { Koma } from 'constant/shogi/koma';
import { Player } from 'constant/shogi/player';

export interface MasuState {
    player: Player;
    koma: Koma;
    suzi: number;
    dan: number;
    imagePath: string;
}