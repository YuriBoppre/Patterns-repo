import Aprovador from "./Aprovador";
import { Despesa } from "./Despesa";

export default class VicePresidente extends Aprovador {
    aprovar(despesa: Despesa): void {
        if (despesa.getValor() <= 20000) {
            return console.log(`Vice-presidente aprovou R$ ${despesa.getValor()}`);
        }

        this.proximo.aprovar(despesa);
    }
}
