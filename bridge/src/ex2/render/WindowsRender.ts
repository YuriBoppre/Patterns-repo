import { Render } from "./Render";

export class WindowsRender implements Render {
    renderLine(): void {
        console.log("Desenhando uma linha no ambiente Windows");
    }

    renderBitmap(): void {
        console.log("Desenhando bitmap no Windows");
    }
}
