import EstadoConta from "./EstadoConta";
import { Conta } from "./conta";

export class Bloqueada extends EstadoConta {
  constructor(c: Conta) {
    super(c);
  }

  depositar(): void {
    console.log("Conta bloqueada. Não é possível depositar.");
  }

  sacar(): void {
    console.log("Conta bloqueada. Não é possível sacar.");
  }

  bloquear(): void {
    console.log("Conta já está bloqueada.");
  }

  reativar(): void {
    this.conta.setEstadoAtual(this.conta.getAtiva());
    console.log("Conta reativada.");
  }

  encerrar(): void {
    this.conta.setEstadoAtual(this.conta.getFechada());
    console.log("Conta encerrada.");
  }

  consultarSaldo(): void {
    console.log(`Saldo: R$${this.conta.getSaldo()}`);
  }
}
