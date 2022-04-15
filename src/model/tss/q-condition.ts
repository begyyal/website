import { DispMasuState } from 'model/tss/masu-state';
import { Motigoma } from 'model/tss/motigoma';
import { Koma } from 'constant/tss/koma';
import { Player } from 'constant/tss/player';

export class QCondition {
    matrix: DispMasuState[];
    senteMtgm: Motigoma[];
    goteMtgm: Motigoma[];
    nom: number;

    constructor() {
        this.reset();
    }

    reset() {
        this.matrix = [...Array(81)].map((_, i) => null);
        this.nom = 1;
        this.senteMtgm = this.createMotigoma(Player.Sente);
        this.goteMtgm = this.createMotigoma(Player.Gote);
    }

    private createMotigoma(player: Player) {
        return [Koma.Hisya, Koma.Kaku, Koma.Kin, Koma.Gin, Koma.Keima, Koma.Kyousya, Koma.Hu]
            .map(k => {
                return {
                    koma: k,
                    value: player == Player.Gote ? k.limit : 0
                }
            });
    }
}