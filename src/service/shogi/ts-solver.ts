import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { MasuState } from 'model/shogi/masu-state';
import { Motigoma } from 'model/shogi/motigoma';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const calc_url = "http://localhost:8080/tss/exe";

@Injectable({
    providedIn: 'root'
})
export class TsSolver {
    constructor(private http: HttpClient) {
    }

    calculate(
        matrix: MasuState[],
        senteMtgm: Motigoma[],
        goteMtgm: Motigoma[],
        tesuu: number) {

        const result = this.http
            .post<CalcResult>(calc_url,
                {
                    ban: this.convertBan(matrix),
                    senteMtgm: this.convertMtgm(senteMtgm),
                    goteMtgm: this.convertMtgm(goteMtgm),
                    nom: tesuu
                })
            .pipe(
                retry(3),
                catchError(this.handleError)
            );

        return result;
    }

    private convertBan(matrix: MasuState[]) {
        return matrix
            .filter(m => m != null)
            .map(m => {
                return {
                    player: m.player.id,
                    koma: {
                        key: m.koma.key,
                        nari: m.koma.nari
                    },
                    suzi: m.suzi,
                    dan: m.dan
                }
            });
    }

    private convertMtgm(mtgm: Motigoma[]) {
        return mtgm.map(m => {
            return {
                key: m.koma.key,
                num: m.value
            }
        });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0)
            console.error('An error occurred:', error.error);
        else
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        return throwError('Something bad happened; please try again later.');
    }
}

export interface CalcResult {
    result: string[];
}