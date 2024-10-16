import React from "react";

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

export default GameList;
