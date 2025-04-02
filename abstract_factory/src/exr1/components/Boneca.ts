import { Brinquedo } from '../interfaces/Brinquedo';

export class BonecaPlastico implements Brinquedo {
    play(): void {
        console.log("Você está brincando com a boneca de plástico.");
    }
}

export class BonecaMadeira implements Brinquedo {
    play(): void {
        console.log("Você está brincando com a boneca de madeira.");
    }
}
