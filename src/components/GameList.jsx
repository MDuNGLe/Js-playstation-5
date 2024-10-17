// GameList.jsx
import React, { useState, useEffect } from "react";
import { games } from '../data/Game.jsx'; // Импортируем массив игр
import GameItem from './GameItem'; // Импортируем компонент GameItem

const GameList = () => {
    const [selectedGame, setSelectedGame] = useState(null); // Состояние для выбранной игры

    const handleGameClick = (game) => {
        setSelectedGame(game); // Устанавливаем выбранную игру
    };

    const closeGameItem = () => {
        setSelectedGame(null); // Закрываем окно GameItem
    };

    // Эффект для блокировки прокрутки при открытом модальном окне
    useEffect(() => {
        if (selectedGame) {
            document.body.style.overflow = 'hidden'; // Блокировка прокрутки
        } else {
            document.body.style.overflow = 'unset'; // Восстановление прокрутки
        }

        return () => {
            document.body.style.overflow = 'unset'; // Восстановление прокрутки на размонтировании
        };
    }, [selectedGame]);

    return (
        <div className="flex items-center justify-center text-white text-center relative">
            <div>
                <h1 className="mt-5 mb-5 text-2xl font-semibold">Библиотека</h1>
                <div className="flex flex-wrap justify-center gap-8" style={{ width: '380px', height: '360px' }}>
                    {games.map((game, index) => (
                        <button key={index} onClick={() => handleGameClick(game)}>
                            <img src={game.imageUrl} alt={game.title} className="w-[100px] h-[100px] rounded-[10px]" />
                        </button>
                    ))}
                </div>

                {/* Если игра выбрана, отображаем компонент GameItem без затемнения фона */}
                {selectedGame && (
                    <div className="fixed top-[128px] left-[545px] flex items-center justify-center z-50">
                        <div className="bg-black w-[820px] h-[464px] rounded-[5px] flex items-center justify-center">
                            <GameItem
                                title={selectedGame.title}
                                imageUrl={selectedGame.imageUrl}
                                description={selectedGame.description}
                                releaseDate={selectedGame.releaseDate}
                                progress={selectedGame.progress}
                                achievements={selectedGame.achievements}
                                hoursPlayed={selectedGame.hoursPlayed}
                                onClose={closeGameItem}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameList;
