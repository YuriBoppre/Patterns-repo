export interface Contato {
    getNome(): string;
    exibir(identificacao?: string): void;
    buscar(nome: string): Contato[];
}
