import PropTypes from 'prop-types'; // Импортируем prop-types
import GameItem from './GameItem';

const GameList = ({ goToMainMenu }) => {
    const games = [
        { id: 1, title: 'Игра 1' },
        { id: 2, title: 'Игра 2' },
        { id: 3, title: 'Игра 3' },
    ];

    return (
        <div className="text-white text-center">
            <h1>Список игр</h1>
            <ul className="list-disc list-inside">
                {games.map(game => (
                    <li key={game.id}>{game.title}</li>
                ))}
            </ul>
            <button onClick={goToMainMenu}>Назад в главное меню</button>
        </div>
    );
};

// Добавляем валидацию типов
GameList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        playtime: PropTypes.number.isRequired,
        releaseDate: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired,
        achievements: PropTypes.array, // achievements могут быть необязательными
    })).isRequired,
};

export default GameList;
