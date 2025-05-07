import Aprovador from "./Aprovador";
import { Despesa } from "./Despesa";

export default class Presidente extends Aprovador {
    aprovar(despesa: Despesa): void {
        console.log(`Presidente aprovou R$ ${despesa.getValor()}`);
    }
}
