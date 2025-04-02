import { Criatura } from './Criatura';

export interface CriaturaFactory {
    criarCriaturaForte(): Criatura;
    criarCriaturaVeloz(): Criatura;
}