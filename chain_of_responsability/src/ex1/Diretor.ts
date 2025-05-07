import Aprovador from "./Aprovador";
import { Despesa } from "./Despesa";

export default class Diretor extends Aprovador {
    aprovar(despesa: Despesa): void {
        if (despesa.getValor() <= 5000) {
            return console.log(`Diretor aprovou R$ ${despesa.getValor()}`);
        }

        this.proximo.aprovar(despesa);
    }
}
