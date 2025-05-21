import { Conta } from "./conta";
import EstadoConta from "./EstadoConta";

export class Suspensa extends EstadoConta {
    constructor(c: Conta) {
      super(c);
    }
  
    depositar(): void {
      console.log("Conta inativa. Não é possível depositar.");
    }
  
    sacar(): void {
      console.log("Conta inativa. Não é possível sacar.");
    }
  
    bloquear(): void {
      console.log("Conta inativa. Não pode ser bloqueada.");
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
  