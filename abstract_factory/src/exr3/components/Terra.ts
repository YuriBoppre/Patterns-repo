// src/components/Terra.ts

import { Veiculo } from '../interfaces/Veiculo';
import { Propulsao } from '../interfaces/Propulsao';
import { Controle } from '../interfaces/Controle';

export class CarroVoador implements Veiculo {
    getPropulsao(): Propulsao {
        return new MotorAJato();
    }

    getControle(): Controle {
        return new ControleManual();
    }
}

export class MotoAutonoma implements Veiculo {
    getPropulsao(): Propulsao {
        return new MotorAJato();
    }

    getControle(): Controle {
        return new InteligenciaArtificial();
    }
}

class MotorAJato implements Propulsao {
    tipo(): string {
        return "Motor a Jato";
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
