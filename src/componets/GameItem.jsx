// src/components/GameItem.jsx
import React from 'react';

const GameItem = ({ game }) => {
    return (
        <div className="game-item">
            <img src={game.image} alt={game.title} className="game-image" />
            <p>{game.title}</p>
        </div>
    );
};

export default GameItem;
