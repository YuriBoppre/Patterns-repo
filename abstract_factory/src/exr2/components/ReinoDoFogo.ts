// src/components/ReinoDoFogo.ts

import { CriaturaFactory } from '../interfaces/CriaturaFactory';
import { Dragao, Salamandra } from './Fogo';
import { Criatura } from '../interfaces/Criatura';

export class ReinoDoFogo implements CriaturaFactory {
    criarCriaturaForte(): Criatura {
        return new Dragao();
    }

    criarCriaturaVeloz(): Criatura {
        return new Salamandra();
    }
}
