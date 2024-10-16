import Header from './Header';
import GameList from './GameList';
import bg from '../assets/ps-bg.png';
import Menu from '../data/Menu';

const ConsoleScreen = () => {
    const menu = new Menu();

    // Пример URL изображений (замени на реальные пути к изображениям)
    menu.addGame('Spider-Man', 20, '2018-09-07', [], '../assets/spider-man.png');
    menu.addGame('2K22', 10, '2021-09-10', [], '../assets/nba');
    menu.addGame('Elden Ring', 50, '2022-02-25', [], '../assets/eldenring.png');
    menu.addGame('Splitgate', 30, '2021-07-27', [], 'path/to/splitgate.png');

    const games = menu.getGames(); // Получаем список игр

    return (
        <div className="console-screen">
            <img src={bg} alt="bg" className="absolute top-[130px] left-[550px]" />
            <Header />
            <GameList games={games} /> {/* Передаём игры в GameList */}
        </div>
    );
};

export default ConsoleScreen;
