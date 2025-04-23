import { IMediaAPI } from '../IMediaAPI';

export class ProfessionalAPI implements IMediaAPI {
    play() { console.log("[ProfessionalAPI] Play professional"); }
    pause() { console.log("[ProfessionalAPI] Pausando..."); }
    stop() { console.log("[ProfessionalAPI] Parado."); }
}