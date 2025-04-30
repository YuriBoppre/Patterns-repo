import { FormatoDesenho } from "./FormatoDesenho";

export class DesenharVetor extends FormatoDesenho {
    desenhar(): void {
        console.log("Formato vetorial:");
        this.render.renderLine();
    }
}
