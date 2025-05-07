import Gerente from "./Gerente";
import Diretor from "./Diretor";
import VicePresidente from "./VicePresidente";
import Presidente from "./Presidente";
import { Despesa } from "./Despesa";

export class CalculadoraAprovacao {
  aprovarDespesa(despesa: Despesa): void {
    const gerente = new Gerente();
    const diretor = new Diretor();
    const vicePres = new VicePresidente();
    const presidente = new Presidente();

    gerente.setProximo(diretor);
    diretor.setProximo(vicePres);
    vicePres.setProximo(presidente);

    gerente.aprovar(despesa);
  }
}
