import { DispMasuState } from 'model/tss/masu-state';
import { Motigoma } from 'model/tss/motigoma';

export interface QCondition {
    matrix: DispMasuState[];
    senteMtgm: Motigoma[];
    goteMtgm: Motigoma[];
    nom: number;
}