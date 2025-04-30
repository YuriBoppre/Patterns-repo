import { Pessoa } from "./Pessoa";

export class Grupo {
    public nome: string;
    public categoria: string;
    public membros: (Pessoa | Grupo)[];

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
        this.membros = [];
    }

    public adicionar(membro: Pessoa | Grupo) {
        this.membros.push(membro);
    }

    public remover(membro: Pessoa | Grupo) {
        this.membros = this.membros.filter(m => m !== membro);
    }

    public getNome(): string {
        return this.nome;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public exibir(spacer: string = ""): void {
        console.log(`${spacer} + ${this.nome} [${this.categoria}]`);
        
        this.membros.forEach(membro => {
            membro.exibir(spacer + "  ");
        });
    }
}
