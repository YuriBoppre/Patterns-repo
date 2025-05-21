import { Pessoa } from "./Pessoa";
import { Grupo } from "./Grupo";

const Anderson = new Pessoa("Anderson", "Gestor");
const Matheus = new Pessoa("Matheus", "Colega");
const Bruno = new Pessoa("Bruno", "Colega");
const Mãe = new Pessoa("Mae", "Mãe");
const Irmã = new Pessoa("Irma", "Irmã");
const Dhener = new Pessoa("Dhener", "Primo");
const Dev1 = new Pessoa("Dev1", "Desenvolvedor");

const primos = new Grupo("Primos", "Subgrupo de Família");
primos.adicionar(Dhener);

const familia = new Grupo("Família", "Grupo Principal");
familia.adicionar(Mãe);
familia.adicionar(Irmã);
familia.adicionar(primos);

const equipeDev = new Grupo("Equipe de Desenvolvimento", "Subgrupo de Trabalho");
equipeDev.adicionar(Dev1);

const trabalho = new Grupo("Colegas de Trabalho", "Grupo Principal");
trabalho.adicionar(equipeDev);
trabalho.adicionar(Anderson);
trabalho.adicionar(Matheus);
trabalho.adicionar(Bruno);


//Rede -> Raiz
const redeContatos = new Grupo("Meus Contatos", "Pasta Raiz");
redeContatos.adicionar(familia);
redeContatos.adicionar(trabalho);
redeContatos.exibir();
