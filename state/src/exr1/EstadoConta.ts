import { Conta } from "./conta";

export default abstract class EstadoConta {
  protected conta: Conta;

  constructor(c: Conta) {
    this.conta = c;
  }

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;
  abstract bloquear(): void;
  abstract reativar(): void;
  abstract encerrar(): void;
  abstract consultarSaldo(): void;
}
