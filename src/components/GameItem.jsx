import React from 'react';

const GameItem = ({ game }) => {
    return (
        <div className="game-item">
            <img src={game.coverImage} alt={game.title} className="game-cover" />
        </div>
    );
};

export default GameItem;
