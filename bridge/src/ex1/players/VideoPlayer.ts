import { MediaPlayer } from './MediaPlayer';

export class VideoPlayer extends MediaPlayer {
    play() {
        console.log("Iniciando seu Vídeo...");
        this.api.play();
    }
    
    pause() {
        console.log("Vídeo pausado! Continue quando quiser");
        this.api.pause();
    }

    stop() {
        console.log("Vídeo parado...");
        this.api.stop();
    }
}