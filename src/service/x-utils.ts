import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class XUtils {

    constructor() { }

    getNowAsDateString() {
        const now = new Date().toLocaleDateString().split('/');
        return now[2] + "-" + now[0] + "-" + now[1];
    }
}