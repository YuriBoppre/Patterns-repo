import { Render } from "./Render";

export class AndroidRender implements Render {
    renderLine(): void {
        console.log("Desenhando uma linha no ambiente Android");
    }

    renderBitmap(): void {
        console.log("Desenhando bitmap no ambiente Android");
    }
}
