import Header from './Header';
import GameList from './GameList';
import bg from '../assets/ps-bg.png';
import Menu from '../data/Menu';

const ConsoleScreen = () => {
    const menu = new Menu();

    const games = menu.getGames(); // Получаем список игр

    return (
        <div className="console-screen">
            {/* Контейнер для фона и элементов */}
            <div
                className="ps-bg"
                style={{backgroundImage: `url(${bg})`}}
            >
                {/* Все элементы будут внутри ps-bg */}
                <div className="absolute ">

                    <GameList games={games}/> {/* Передаём игры в GameList */}
                </div>
            </div>
        </div>
    );
};

export default ConsoleScreen;
