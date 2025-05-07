import Aprovador from "./Aprovador";
import { Despesa } from "./Despesa";

export default class Gerente extends Aprovador {
  aprovar(despesa: Despesa): void {
    if (despesa.getValor() <= 1000) {
      return console.log(`Gerente aprovou R$ ${despesa.getValor()}`);
    }
      
    this.proximo.aprovar(despesa);
  }
}
