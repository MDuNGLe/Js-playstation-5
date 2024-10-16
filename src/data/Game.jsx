// data/Game.js
class Game {
    constructor(title, playtime, releaseDate, achievements = [], coverImage) {
        this.title = title;
        this.playtime = playtime;
        this.releaseDate = releaseDate;
        this.achievements = achievements;
        this.coverImage = coverImage; // Добавляем поле для изображения
    }
}

export default Game;
