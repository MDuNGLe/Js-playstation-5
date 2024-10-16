// components/GameItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const GameItem = ({ game }) => {
    return (
        <div className="game-item">
            <img src={game.coverImage} alt={game.title} className="game-cover" />
            <h3>{game.title}</h3>
            <p>{game.playtime} hours</p>
        </div>
    );
};

// Добавляем валидацию типов
GameItem.propTypes = {
    game: PropTypes.shape({
        title: PropTypes.string.isRequired,
        playtime: PropTypes.number.isRequired,
        releaseDate: PropTypes.string.isRequired,
        coverImage: PropTypes.string.isRequired,
        achievements: PropTypes.array, // achievements могут быть необязательными
    }).isRequired,
};

export default GameItem;
