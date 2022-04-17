import { Injectable } from '@angular/core';
import { BYType } from 'constant/by-type';

@Injectable({
    providedIn: 'root'
})
export class SessionManager {

    storeSettings: (() => void)[] = [];
    restoreSettings: (() => void)[] = [];

    constructor() { }

    onBeforeUnload(event: any) {
        this.storeSettings.forEach(s => s());
    }

    onLoad(event: any) {
        this.restoreSettings.forEach(s => s());
    }

    registStoreSetting(type: BYType, key: string, getValue: () => string) {
        const k = this.concatKeys(type, key);
        this.storeSettings.push(() => sessionStorage.setItem(k, getValue()));
    }

    registRetoreSetting(type: BYType, key: string, setValue: (v: string) => void) {
        const k = this.concatKeys(type, key);
        this.restoreSettings.push(() => {
            if (sessionStorage.getItem(k) != null)
                setValue(sessionStorage.getItem(k));
        });
    }

    concatKeys(type: BYType, key: string) {
        return type.key + "." + key;
    }
}
