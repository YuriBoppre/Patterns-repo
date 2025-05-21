import EstadoConta from "./EstadoConta";
import { Conta } from "./conta";

export class Ativa extends EstadoConta {
  constructor(c: Conta) {
    super(c);
  }

  depositar(valor: number): void {
    this.conta.incrementarSaldo(valor);
    console.log(`Depósito de R$${valor} realizado.`);
  }

  sacar(valor: number): void {
    if (this.conta.getSaldo() >= valor) {
      this.conta.decrementarSaldo(valor);
      console.log(`Saque de R$${valor} realizado.`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  bloquear(): void {
    this.conta.setEstadoAtual(this.conta.getBloqueada());
    console.log("Conta bloqueada.");
  }

  reativar(): void {
    console.log("Conta já está ativa.");
  }

  encerrar(): void {
    this.conta.setEstadoAtual(this.conta.getFechada());
    console.log("Conta encerrada.");
  }

  consultarSaldo(): void {
    console.log(`Saldo: R$${this.conta.getSaldo()}`);
  }
}
