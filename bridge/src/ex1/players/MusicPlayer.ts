import { MediaPlayer } from './MediaPlayer';

export class MusicPlayer extends MediaPlayer {
    play() {
        console.log("Iniciando música...");
        this.api.play();
    }
    
    pause() {
        console.log("Música pausada!");
        this.api.pause();
    }

    stop() {
        console.log("Parando música...");
        this.api.stop();
    }
}