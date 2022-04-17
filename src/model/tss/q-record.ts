import { QCondition } from './q-condition';

export interface QRecord {
    id: number;
    name: string;
    date: string;
    state: number;
    cond: QCondition;
}