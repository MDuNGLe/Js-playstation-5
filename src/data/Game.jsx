class Game {
    constructor(title, playtime, releaseDate, achievements = []) {
        this.title = title;
        this.playtime = playtime;
        this.releaseDate = releaseDate;
        this.achievements = achievements;
    }
}

export default Game;
