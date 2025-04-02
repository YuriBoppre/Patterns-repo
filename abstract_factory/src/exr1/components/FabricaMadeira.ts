import { BrinquedoFactory } from '../interfaces/BrinquedoFactory';
import { CarrinhoMadeira } from './Carrinho';
import { BonecaMadeira } from './Boneca';

export class FabricaMadeira implements BrinquedoFactory {
    criarCarrinho() {
        return new CarrinhoMadeira();
    }

    criarBoneca() {
        return new BonecaMadeira();
    }
}
