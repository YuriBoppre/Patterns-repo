import { FormatoDesenho } from "./FormatoDesenho";

export class Desenhar3D extends FormatoDesenho {
    desenhar(): void {
        console.log("Formato 3D:");
        this.render.renderLine();
        this.render.renderBitmap();
    }
}
