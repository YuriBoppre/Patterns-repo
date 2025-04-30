import { Render } from "./Render";

export class LinuxRender implements Render {
    renderLine(): void {
        console.log("Desenhando uma linha no ambiente Linux");
    }

    renderBitmap(): void {
        console.log("Desenhando bitmap no ambiente Linux");
    }
}
