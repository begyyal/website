import { DispMasuState, isMasuState, SmartMasuState } from 'model/tss/masu-state';
import { Motigoma, isMotigoma, SmartMotigoma } from 'model/tss/motigoma';
import { NOM_OP_VALUES } from 'constant/tss/config';

export interface QCondition {
    matrix: DispMasuState[];
    senteMtgm: Motigoma[];
    goteMtgm: Motigoma[];
    nom: number;
}

export interface SmartQCondition {
    matrix: SmartMasuState[];
    senteMtgm: SmartMotigoma[];
    goteMtgm: SmartMotigoma[];
    nom: number;
}

export function isQCondition(obj: any): obj is SmartQCondition {
    let ok = obj.matrix !== undefined &&
        obj.senteMtgm !== undefined &&
        obj.goteMtgm !== undefined &&
        obj.nom !== undefined &&
        typeof obj.nom === "number"
    if (ok)
        if (Array.isArray(obj.matrix))
            ok = ok && obj.matrix.every(isMasuState);
    if (ok)
        if (Array.isArray(obj.senteMtgm))
            ok = ok && obj.senteMtgm.every(isMotigoma);
    if (ok)
        if (Array.isArray(obj.goteMtgm))
            ok = ok && obj.goteMtgm.every(isMotigoma);
    if (ok)
        ok = ok && NOM_OP_VALUES.some(v => obj.nom == v);
    return ok;
}