// index.ts
import { MusicPlayer } from './players/MusicPlayer';
import { VideoPlayer } from './players/VideoPlayer';
import { PodcastPlayer } from './players/PodcastPlayer';
import { AudiobookPlayer } from './players/AudiobookPlayer';
import { BasicAPI } from './api/BasicAPI';
import { PremiumAPI } from './api/PremiumAPI';
import { ProfessionalAPI } from './api/ProfessionalAPI';


const music = new MusicPlayer(new BasicAPI());
music.play();
music.pause();
music.stop();

console.log("=================================================");
console.log("=================================================");

const video = new VideoPlayer(new PremiumAPI());
video.play();
video.pause();
video.stop();

console.log("=================================================");
console.log("=================================================");

const audiobook = new AudiobookPlayer(new ProfessionalAPI());
audiobook.play();
audiobook.pause();
audiobook.stop();

console.log("=================================================");
console.log("=================================================");

const podcast = new PodcastPlayer(new ProfessionalAPI());
podcast.play();
podcast.pause();
podcast.stop();
