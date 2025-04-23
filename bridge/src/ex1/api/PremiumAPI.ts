import { IMediaAPI } from '../IMediaAPI';

export class PremiumAPI implements IMediaAPI {
    play() { console.log("[PremiumAPI] Play premium"); }
    pause() { console.log("[PremiumAPI] Pausando..."); }
    stop() { console.log("[PremiumAPI] Parado."); }
}