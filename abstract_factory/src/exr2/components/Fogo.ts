// src/components/Fogo.ts

import { Criatura } from '../interfaces/Criatura';

export class Dragao implements Criatura {
    attack(): void {
        console.log("O Dragão utiliza Fire Spin(O alvo fica preso em um vórtice de fogo feroz)");
    }
}

export class Salamandra implements Criatura {
    attack(): void {
        console.log("A Salamandra corre rapidamente e utiliza Blaze Kick(um chute que acerta com mais facilidade, deixando com queimadura seu alvo)");
    }
}
