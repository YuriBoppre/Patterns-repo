import { FabricaPlastico } from './components/FabricaPlastico';
import { FabricaMadeira } from './components/FabricaMadeira';

//Plástico
const fabricaPlastico = new FabricaPlastico();
console.log("Criando brinquedos com a fábrica de plástico:");
const carrinho = fabricaPlastico.criarCarrinho();
carrinho.play();
const boneca = fabricaPlastico.criarBoneca();
boneca.play();

//Madeira
const fabricaMadeira = new FabricaMadeira();
console.log("Criando brinquedos com a fábrica de madeira:");
const carrinhoMadeira = fabricaMadeira.criarCarrinho();
carrinhoMadeira.play();
const bonecaMadeira = fabricaMadeira.criarBoneca();
bonecaMadeira.play();