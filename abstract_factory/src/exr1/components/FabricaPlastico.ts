import { BrinquedoFactory } from '../interfaces/BrinquedoFactory';
import { CarrinhoPlastico, CarrinhoMadeira } from './Carrinho';
import { BonecaPlastico, BonecaMadeira } from './Boneca';

export class FabricaPlastico implements BrinquedoFactory {
    criarCarrinho() {
        return new CarrinhoPlastico();
    }

    criarBoneca() {
        return new BonecaPlastico();
    }
}
