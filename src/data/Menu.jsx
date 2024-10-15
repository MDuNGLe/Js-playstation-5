// data/Menu.js
class Menu {
    constructor() {
        this.games = []; // Массив для хранения игр
    }

    // Метод для добавления игры
    addGame(game) {
        this.games.push(game);
    }

    // Метод для отображения игр (для отладки)
    displayGames() {
        console.log(this.games);
    }

    // Другие методы...
}

export default Menu;
