import { Conta } from "./conta";

const conta = new Conta();

conta.depositar(10);
conta.consultarSaldo();

conta.sacar(5);
conta.consultarSaldo();

conta.bloquear(); 
conta.depositar(5);
conta.reativar();
conta.sacar(5);
