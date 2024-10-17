import React from "react";
import bg from '../assets/ps-bg.png'; // Импортируем изображение фона

const GameItem = ({ title, imageUrl, description, releaseDate, progress, achievements, hoursPlayed, onClose }) => {
    return (
        <div
            className="flex flex-col items-center justify-center p-4 text-white rounded-lg w-[820px] h-[475px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Заголовок */}
            <h1 className="text-3xl font-semibold mb-5">{title}</h1>

            {/* Контейнер с изображением и описанием */}
            <div className="flex flex-row w-full h-full">
                {/* Изображение игры */}
                <img src={imageUrl} alt={title} className="w-[270px] h-[270px] rounded-md" />

                {/* Описание игры */}
                <div className="ml-6 flex flex-col justify-between h-full">
                    <p className="text-gray-300 text-justify">{description}</p> {/* Выравнивание по ширине */}
                    <div className="mt-4 text-right">
                        <p><strong>Дата релиза:</strong> {releaseDate}</p>
                        <p><strong>Прогресс:</strong> {progress}%</p>
                        <p><strong>Достижения:</strong> {achievements.completed} из {achievements.total}</p>
                        <p><strong>Часы в игре:</strong> {hoursPlayed} ч</p>
                    </div>
                </div>
            </div>

            {/* Кнопка Play Game */}
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => console.log('Play Game clicked')}>
                Играть в игру
            </button>

            {/* Кнопка закрытия окна */}
            <button className="mt-4 text-gray-400 hover:text-white" onClick={onClose}>
                Закрыть
            </button>
        </div>
    );
};

export default GameItem;
