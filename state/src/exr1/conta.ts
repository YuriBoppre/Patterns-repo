import EstadoConta from "./EstadoConta";
import { Ativa } from "./Ativa";
import { Bloqueada } from "./Bloqueada";
import { Inativa } from "./Inativa";
import { Suspensa } from "./Suspensa";
import { Fechada } from "./Fechada";

export class Conta {
  private saldo: number = 0;

  private ativa: EstadoConta;
  private bloqueada: EstadoConta;
  private inativa: EstadoConta;
  private suspensa: EstadoConta;
  private fechada: EstadoConta;

  private estadoAtual: EstadoConta;

  constructor() {
    this.ativa = new Ativa(this);
    this.bloqueada = new Bloqueada(this);
    this.inativa = new Inativa(this);
    this.suspensa = new Suspensa(this);
    this.fechada = new Fechada(this);

    this.estadoAtual = this.ativa;
  }

  // Métodos delegados para o estado atual
  depositar(valor: number): void {
    this.estadoAtual.depositar(valor);
  }

  sacar(valor: number): void {
    this.estadoAtual.sacar(valor);
  }

  bloquear(): void {
    this.estadoAtual.bloquear();
  }

  reativar(): void {
    this.estadoAtual.reativar();
  }

  encerrar(): void {
    this.estadoAtual.encerrar();
  }

  consultarSaldo(): void {
    this.estadoAtual.consultarSaldo();
  }

  // Métodos auxiliares
  incrementarSaldo(valor: number) {
    this.saldo += valor;
  }

  decrementarSaldo(valor: number) {
    this.saldo -= valor;
  }

  getSaldo(): number {
    return this.saldo;
  }

  setEstadoAtual(estado: EstadoConta) {
    this.estadoAtual = estado;
  }

  getAtiva(): EstadoConta {
    return this.ativa;
  }

  getBloqueada(): EstadoConta {
    return this.bloqueada;
  }

  getInativa(): EstadoConta {
    return this.inativa;
  }

  getSuspensa(): EstadoConta {
    return this.suspensa;
  }

  getFechada(): EstadoConta {
    return this.fechada;
  }
}
