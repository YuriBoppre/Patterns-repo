import { Render } from "../render/Render";

export abstract class FormatoDesenho {
    protected render: Render;

    constructor(r: Render) {
        this.render = r;
    }

    abstract desenhar(): void;
}
