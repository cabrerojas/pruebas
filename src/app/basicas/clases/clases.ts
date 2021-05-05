

export class Jugador {

    hp: number;

    constructor() {
        this.hp = 100;
    }

    recibeDanio(denio: number ): number{
        if (denio >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - denio;
        }

        return this.hp;

    }

}
