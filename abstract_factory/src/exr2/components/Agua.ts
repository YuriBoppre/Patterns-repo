// src/components/Agua.ts

import { Criatura } from '../interfaces/Criatura';

export class SerpenteMarinha implements Criatura {
    attack(): void {
        console.log("A Serpente Marinha ataca com HiperExplosion(É MUITA ÁGUA)!");
    }
}

export class Tritao implements Criatura {
    attack(): void {
        console.log("O Tritão lança Rain Dance(aumentando o poder dos movimentos do tipo Água e o deixando mais rápido)");
    }
}
