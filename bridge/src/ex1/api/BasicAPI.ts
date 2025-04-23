import { IMediaAPI } from '../IMediaAPI';

export class BasicAPI implements IMediaAPI {
    play() { console.log("[BasicAPI] Play básico"); }
    pause() { console.log("[BasicAPI] Pausando..."); }
    stop() { console.log("[BasicAPI] Parado."); }
}