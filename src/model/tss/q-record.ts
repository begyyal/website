import { isQCondition, SmartQCondition } from './q-condition';

export interface QRecord {
    id: number;
    name: string;
    date: string;
    state: number;
    cond: SmartQCondition;
}

export function isQRecord(obj: any): obj is QRecord {
    let ok = obj.id !== undefined &&
        obj.name !== undefined &&
        obj.date !== undefined &&
        obj.state !== undefined &&
        obj.cond !== undefined;
    ok = ok && typeof obj.id === "number" &&
        typeof obj.name === "string" &&
        typeof obj.date === "string" &&
        typeof obj.state === "number";
    if (ok)
        ok = ok && isQCondition(obj.cond);
    return ok;
}
