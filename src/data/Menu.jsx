// data/Menu.js
import Game from './Game.jsx';

class Menu {
    constructor() {
        this.games = []; // Массив для хранения игр
    }

    // Метод для добавления игры
    addGame(title, playtime, releaseDate, achievements = [], coverImage) {
        const game = new Game(title, playtime, releaseDate, achievements, coverImage); // Передаём coverImage
        this.games.push(game); // Добавляем игру в массив
    }

    // Метод для получения всех игр
    getGames() {
        return this.games;
    }
}

export default Menu;
