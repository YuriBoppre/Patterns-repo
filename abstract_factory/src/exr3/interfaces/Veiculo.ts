import { Propulsao } from './Propulsao';
import { Controle } from './Controle';

export interface Veiculo {
    getPropulsao(): Propulsao;
    getControle(): Controle;
}
