class System {
    constructor(fps, isHDR, remotePlay, dolbyAtmos) {
        this.fps = fps;
        this.isHDR = isHDR;
        this.remotePlay = remotePlay;
        this.dolbyAtmos = dolbyAtmos;
    }

    getSystemSpecs() {
        return {
            fps: this.fps,
            isHDR: this.isHDR,
            remotePlay: this.remotePlay,
            dolbyAtmos: this.dolbyAtmos
        };
    }
}

export default System;
