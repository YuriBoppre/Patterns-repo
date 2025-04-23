import { MediaPlayer } from './MediaPlayer';

export class AudiobookPlayer extends MediaPlayer {
    play() {
        console.log("AudioBook iniciado, aproveite sua aventura!");
        this.api.play();
    }
    
    pause() {
        console.log("Fique tranquilo, seu AudioBook está pausado.");
        this.api.pause();
    }

    stop() {
        console.log("AudioBook parado e esperando sua volta!");
        this.api.stop();
    }
}