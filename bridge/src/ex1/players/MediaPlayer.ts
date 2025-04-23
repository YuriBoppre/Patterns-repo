import { IMediaAPI } from '../IMediaAPI';

export abstract class MediaPlayer {
    protected api: IMediaAPI;

    constructor(api: IMediaAPI) {
        this.api = api;
    }

    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}
