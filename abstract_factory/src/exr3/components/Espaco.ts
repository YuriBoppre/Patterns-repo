// src/components/Espaco.ts

import { Veiculo } from '../interfaces/Veiculo';
import { Propulsao } from '../interfaces/Propulsao';
import { Controle } from '../interfaces/Controle';

export class Nave implements Veiculo {
    getPropulsao(): Propulsao {
        return new PropulsaoPlasma();
    }

    getControle(): Controle {
        return new ControleManual();
    }
}

export class ExploradorRobotico implements Veiculo {
    getPropulsao(): Propulsao {
        return new PropulsaoPlasma();
    }

    getControle(): Controle {
        return new InteligenciaArtificial();
    }
}

class PropulsaoPlasma implements Propulsao {
    tipo(): string {
        return "Propulsão a Plasma";
    }
}

class ControleManual implements Controle {
    tipo(): string {
        return "Controle Manual";
    }
}

class InteligenciaArtificial implements Controle {
    tipo(): string {
        return "Inteligência Artificial";
    }
}
