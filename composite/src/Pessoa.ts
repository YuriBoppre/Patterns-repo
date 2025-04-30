export class Pessoa {
    public nome: string;
    public categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public exibir(spacer: string = ""): void {
        console.log(`${spacer} - ${this.nome} [${this.categoria}]`);
    }
}
