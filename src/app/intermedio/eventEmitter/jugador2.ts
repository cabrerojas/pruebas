import { EventEmitter } from '@angular/core';

export class Jugador2 {

    hp: number;
    hpCambia = new EventEmitter<number>();

    constructor() {
        this.hp = 100;
    }

    recibeDanio(denio: number ){
        if (denio >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - denio;
        }

        this.hpCambia.emit( this.hp );

    }

}
