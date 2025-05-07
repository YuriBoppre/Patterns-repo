import { CalculadoraAprovacao } from "./CalculadoraAprovacao";
import { Despesa } from "./Despesa";

const calculadora = new CalculadoraAprovacao();

const despesa = new Despesa();

despesa.setValor(500);
calculadora.aprovarDespesa(despesa);

despesa.setValor(3000);
calculadora.aprovarDespesa(despesa);

despesa.setValor(15000);
calculadora.aprovarDespesa(despesa);

despesa.setValor(50000);
calculadora.aprovarDespesa(despesa);
