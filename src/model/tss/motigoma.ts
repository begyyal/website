import { Koma } from 'constant/tss/koma';

export interface Motigoma {
    koma: Koma;
    value: number;
}

export interface SmartMotigoma {
    koma: string;
    nari: boolean;
    value: number;
}

export function isMotigoma(obj: any): obj is SmartMotigoma {
    let ok = obj.koma !== undefined &&
        obj.nari !== undefined &&
        obj.value !== undefined;
    ok = ok && typeof obj.koma === "string" &&
        typeof obj.nari === "boolean" &&
        typeof obj.value === "number";
    return ok;
}
