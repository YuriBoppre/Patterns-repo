import { Render } from "./Render";

export class MacOSRender implements Render {
    renderLine(): void {
        console.log("Desenhando uma linha no ambiente MacOS");
    }

    renderBitmap(): void {
        console.log("Desenhando bitmap no ambiente MacOS");
    }
}
