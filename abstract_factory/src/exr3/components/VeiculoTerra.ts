import { VeiculoFactory } from '../interfaces/VeiculoFactory';
import { CarroVoador, MotoAutonoma } from './Terra';
import { Veiculo } from '../interfaces/Veiculo';

export class VeiculoTerra implements VeiculoFactory {
    criarPropulsao(): Veiculo {
        return new CarroVoador();
    }

    criarControle(): Veiculo {
        return new MotoAutonoma();
    }
}
