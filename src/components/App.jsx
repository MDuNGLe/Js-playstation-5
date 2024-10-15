import User from '../data/User';
import System from '../data/System';
import Console from '../data/Console';
import Game from '../data/Game';
import Menu from '../data/Menu';

const App = () => {
    // Создаем пользователя
    const user = new User('Gamer123', 100, ['Player1', 'Player2']);

    // Создаем системные настройки
    const systemSettings = new System(60, 120, true, true, true);

    // Создаем консоль
    const myConsole = new Console('PlayStation 5', true, ['HDMI', 'USB-C', 'Ethernet'], systemSettings);

    // Подключаем геймпад
    myConsole.connectGamepad('DualSense-PS5');

    // Создаем игры
    const spiderman = new Game('SPIDER-MAN', 15, '2018-09-07', ['Completed Story', 'All Collectibles']);
    const nba2k = new Game('NBA 2K', 10, '2021-09-10', ['MVP', 'Champion']);

    // Создаем меню и добавляем игры
    const menu = new Menu();
    menu.addGame(spiderman);
    menu.addGame(nba2k);

    return (
        <div>
            <h1>Информация о пользователе</h1>
            <p>Имя: {user.username}</p>
            <p>Баланс: ${user.balance}</p>
            <p>Друзья: {user.friends.join(', ')}</p>

            <h1>Информация о консоли</h1>
            <p>Консоль: {myConsole.title}</p>
            <p>Гарантия: {myConsole.hasWarranty ? 'Да' : 'Нет'}</p>
            <p>Порты: {myConsole.ports.join(', ')}</p>

            <h1>Настройки системы</h1>
            <p>FPS: {myConsole.settings.fps}</p>
            <p>Hz: {myConsole.settings.hz}</p>
            <p>HDR: {myConsole.settings.isHDR ? 'Поддерживается' : 'Не поддерживается'}</p>

            <h1>Список игр</h1>
            <ul>
                {menu.games.map((game) => (
                    <li key={game.title}>
                        {game.title} - Потраченные часы: {game.hoursPlayed} - Достижения: {game.achievements.join(', ')}
                    </li>
                ))}
            </ul>

            <p>Количество игр в меню: {menu.countOfGames}</p>
        </div>
    );
};

export default App;
