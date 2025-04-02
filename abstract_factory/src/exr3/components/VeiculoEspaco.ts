// src/components/VeiculoEspaco.ts

import { VeiculoFactory } from '../interfaces/VeiculoFactory';
import { Nave, ExploradorRobotico } from './Espaco';
import { Veiculo } from '../interfaces/Veiculo';

export class VeiculoEspaco implements VeiculoFactory {
    criarPropulsao(): Veiculo {
        return new Nave();
    }

    criarControle(): Veiculo {
        return new ExploradorRobotico();
    }
}
