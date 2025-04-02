import { Brinquedo } from './Brinquedo';

export interface BrinquedoFactory {
    criarCarrinho(): Brinquedo;
    criarBoneca(): Brinquedo;
}