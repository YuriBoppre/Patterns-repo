import { Veiculo } from './Veiculo';

export interface VeiculoFactory {
    criarPropulsao(): Veiculo;
    criarControle(): Veiculo;
}
