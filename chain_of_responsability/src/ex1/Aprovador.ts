import { Despesa } from "./Despesa";

export default abstract class Aprovador {
  protected proximo!: Aprovador;

  abstract aprovar(despesa: Despesa): void;

  setProximo(proximo: Aprovador): void {
    this.proximo = proximo;
  }
}
