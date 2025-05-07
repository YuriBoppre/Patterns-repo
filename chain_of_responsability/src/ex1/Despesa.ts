export class Despesa {
    private valor: number = 0;
  
    getValor(): number {
      return this.valor;
    }
  
    setValor(valor: number): void {
      this.valor = valor;
    }
  }