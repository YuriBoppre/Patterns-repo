// src/main.ts

import { ReinoDoFogo } from './components/ReinoDoFogo';
import { ReinoDaAgua } from './components/ReinoDaAgua';

function testarFabrica(fabrica: any): void {
    console.log("Criando criaturas fortes...");
    const criaturaForte = fabrica.criarCriaturaForte();
    criaturaForte.attack();
    
    console.log("Criando criaturas velozes...");
    const criaturaVeloz = fabrica.criarCriaturaVeloz();
    criaturaVeloz.attack();
}


console.log("\nCriando criaturas do Reino do Fogo:");
const reinoFogo = new ReinoDoFogo();
testarFabrica(reinoFogo);

console.log("\nCriando criaturas do Reino da Água:");
const reinoAgua = new ReinoDaAgua();
testarFabrica(reinoAgua);
