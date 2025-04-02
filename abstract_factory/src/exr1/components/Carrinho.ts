import { Brinquedo } from '../interfaces/Brinquedo';

export class CarrinhoPlastico implements Brinquedo {
    play(): void {
        console.log("Você está brincando com um carrinho de plástico.");
    }
}

export class CarrinhoMadeira implements Brinquedo {
    play(): void {
        console.log("Você está brincando com um carrinho de madeira.");
    }
}
