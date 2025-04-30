import { FormatoDesenho } from "./FormatoDesenho";

export class DesenharBitmap extends FormatoDesenho {
    desenhar(): void {
        console.log("Formato bitmap:");
        this.render.renderBitmap();
    }
}
