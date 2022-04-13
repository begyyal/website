import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionManager {

    storeSettings: (() => void)[] = [];
    restoreSettings: (() => void)[] = [];

    constructor() {}

    onBeforeUnload(event: any) {
        this.storeSettings.forEach(s => s());
    }

    onLoad(event: any) {
        this.restoreSettings.forEach(s => s());
    }

    registStoreSetting(key: string, getValue: () => string) {
        this.storeSettings.push(() => sessionStorage.setItem(key, getValue()));
    }

    registRetoreSetting(key: string, setValue: (v: string) => void) {
        this.restoreSettings.push(() => {
            if(sessionStorage.getItem(key) != null)
                setValue(sessionStorage.getItem(key));
        });
    }
}
