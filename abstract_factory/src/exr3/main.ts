import { VeiculoTerra } from './components/VeiculoTerra';
import { VeiculoEspaco } from './components/VeiculoEspaco';

console.log("Criando veículo para modalidade terra:");
const veiculoTerra = new VeiculoTerra();
console.log(`Criando veículo com Propulsão: ${veiculoTerra.criarPropulsao().getPropulsao().tipo()} |
Criando veículo com Controle: ${veiculoTerra.criarControle().getControle().tipo()}`);

console.log("Criando veículo para modalidade espaço:");
const veiculoEspaco = new VeiculoEspaco();
console.log(`Criando veículo com Propulsão: ${veiculoEspaco.criarPropulsao().getPropulsao().tipo()} |
Criando veículo com Controle: ${veiculoEspaco.criarControle().getControle().tipo()}`);
