import PropTypes from 'prop-types'; // Импортируем prop-types
import GameItem from './GameItem';

const GameList = ({ games }) => {
    return (
        <div className="game-list">
            {games.map((game, index) => (
                <GameItem key={index} game={game} />
            ))}
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
