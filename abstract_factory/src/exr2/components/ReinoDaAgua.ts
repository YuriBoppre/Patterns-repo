// src/components/ReinoDaAgua.ts

import { CriaturaFactory } from '../interfaces/CriaturaFactory';
import { SerpenteMarinha, Tritao } from './Agua';
import { Criatura } from '../interfaces/Criatura';

export class ReinoDaAgua implements CriaturaFactory {
    criarCriaturaForte(): Criatura {
        return new SerpenteMarinha();
    }

    criarCriaturaVeloz(): Criatura {
        return new Tritao();
    }
}
