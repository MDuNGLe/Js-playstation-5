class System {
    constructor(fps, hz, isHDR, remotePlay, dolbyAtmos) {
        this.fps = fps; // Частота кадров
        this.hz = hz; // Частота обновления
        this.isHDR = isHDR; // Поддержка HDR
        this.remotePlay = remotePlay; // Поддержка удаленного воспроизведения
        this.dolbyAtmos = dolbyAtmos; // Поддержка Dolby Atmos
    }

    // Метод для отображения настроек системы
    displaySettings() {
        console.log(`FPS: ${this.fps}`);
        console.log(`Hz: ${this.hz}`);
        console.log(`HDR: ${this.isHDR ? 'Поддерживается' : 'Не поддерживается'}`);
        console.log(`Удаленное воспроизведение: ${this.remotePlay ? 'Поддерживается' : 'Не поддерживается'}`);
        console.log(`Dolby Atmos: ${this.dolbyAtmos ? 'Поддерживается' : 'Не поддерживается'}`);
    }
}

export default System;
