import { MediaPlayer } from './MediaPlayer';

export class PodcastPlayer extends MediaPlayer {
    play() {
        console.log("Fica tranquilo, iniciando seu Podcast...");
        this.api.play();
    }
    
    pause() {
        console.log("Podcast pausado, volte logo!");
        this.api.pause();
    }

    stop() {
        console.log("Podcast parado...");
        this.api.stop();
    }
}