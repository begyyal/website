import { QCondition } from './q-condition';

export interface QRecord {
    no: number;
    name: string;
    date: string;
    state: number;
    cond: QCondition;
}